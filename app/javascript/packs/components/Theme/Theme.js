import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Each from './Each';
import { Link } from 'react-router-dom';
import Ask from './Ask';
import HomeWrapper from '../HomeWrapper';

const BackBtn = styled.button`
	border: 2px solid black;
	background-color: #a23944;
	max-width: 100px;
	margin-left: auto;
	margin-right: auto;
	color: black;
	padding: 10px 10px;
	border-radius: 3px;
	display: block;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-gap: 20px;
	width: 100%;
	padding: 30px;
	margin-left: auto;
	margin-right: auto;
`;

const Center = styled.div`text-align: center;`;

const Theme = (props) => {
	const [ theme, setTheme ] = useState({});
	const [ themeLoaded, setThemeLoaded ] = useState(false);

	const [ asks, setAsks ] = useState([]);
	const [ asksLoaded, setAsksLoaded ] = useState(false);

	useEffect(() => {
		const id = props.match.params.id;
		const url = `/api/v1/themes/${id}`;
		axios
			.get(url)
			.then((resp) => {
				setTheme(resp.data);
				setThemeLoaded(true);
			})
			.catch((resp) => console.log(resp));
	}, []);

	useEffect(() => {
		const id = props.match.params.id;
		const url = `/api/v1/asks?theme_id=${id}`;
		axios
			.get(url)
			.then((resp) => {
				setAsks(resp.data);
				setAsksLoaded(true);
			})
			.catch((resp) => console.log(resp));
	}, []);
	class DisplayGrid extends React.Component {
		//created a class method called DisplayGrid with a constructor() whose role is when a new instance is created. Super() represents the constructor of the parent class. With a state of asks.
		constructor(props) {
			super(props);
			this.state = {
				asks
			};	
		};
		//created a method called sortQuestions with a setState that takes in state and props. 
		sortQuestions() {
			this.setState((state) => {
				let asks = state.asks;
				asks.sort((a, b) => {
					let sortA = a.question.toUpperCase();
					let sortB = b.question.toUpperCase();
					if (sortA < sortB) {
						return -1;
					}
					if (sortA > sortB) {
						return 1;
					}
					return 0;
				});
				return { asks };
			});
		};
		render() {
			//a const that maps out all the questions
			const grid = this.state.asks.map((item) => {
				return <Ask key={item.id} id={item.id} question={item.question} />;
			});
			return (
				<div className="asks">
					<button onClick={this.sortQuestions.bind(this)}>Sort</button>
					<Grid>{grid}</Grid>
				</div>
			);
		};
	};

	return (
		<div>
			<HomeWrapper />
			<br />
			<div className="column">
				<Center>
					{themeLoaded && <Each attributes={theme.data.attributes} />}
					<DisplayGrid />
				</Center>
			</div>
			<br />
			<Link to="/">
				<BackBtn type="button" className="Homepage-button">
					Back
				</BackBtn>
			</Link>
		</div>
	);
};

export default Theme;

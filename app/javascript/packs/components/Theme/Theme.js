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
	const [theme, setTheme] = useState({});
	const [themeLoaded, setThemeLoaded] = useState(false);

	const [asks, setAsks] = useState([]);
	const [asksLoaded, setAsksLoaded] = useState(false);

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



	

	function sortQuestions() {
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
	}
	

	function DisplayGrid(props) {
		const grid = asks.map((item) => {
		return <Ask key={item.id} id={item.id} question={item.question} />;
	   });
		return (
			<div className="asks">
				<Grid>{grid}</Grid>
			</div>
		);
	}

	function Sorting(props) {
		return (
			<div className="sorting-questions">
				<button onClick={sortQuestions}>Sort Questions</button>
			</div>
		);
	};

	//create a conditional rendering component function
	//function AsksDisplayOrSort() {
	//	const DisplayGridAll = props.DisplayGrid;
	//	if (DisplayGridAll) {
	//		return (
	//			<DisplayGrid />
	//		)
	//	}
	//	return (
	//		<SortGrid />
	//	)
	//}
	
	return (
		<div>
			<HomeWrapper />
			<br />
			<div className="column">
				<Center>
					{themeLoaded && <Each attributes={theme.data.attributes} />}
					<Sorting />
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
}


export default Theme;

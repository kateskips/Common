import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Theme from './Theme';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HomeWrapper from '../HomeWrapper';

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
	width: 100%;
	padding: 20px;
`;
const AboutButton = styled.button`
	border: 2px solid black;
	background-color: #f5c5bd;
	width: 140px;
	margin-left: auto;
	margin-right: auto;
	color: black;
	padding: 10px 15px;
	border-radius: 3px;
`;

const CreateButton = styled.button`
	border: 2px solid black;
	background-color: #f9cd7c;
	width: 140px;
	margin-left: auto;
	margin-right: auto;
	color: black;
	padding: 10px 15px;
	border-radius: 3px;
`;

const QuestionListButton = styled.button`
	border: 2px solid black;
	background-color: #a8eac5;
	width: 140px;
	margin-left: auto;
	margin-right: auto;
	color: black;
	padding: 10px 15px;
	border-radius: 3px;
`;

const Buttons = styled.div`
	margin: 0 auto;
	max-width: 450px;
	display: flex;
	justify-content: space-between;
`;

const Center = styled.div`
text-align: center;
`;

const Themes = () => {
	const [ themes, setThemes ] = useState([]);
	useEffect(
		() => {
			axios
				.get('/api/v1/themes.json')
				.then((resp) => {
					setThemes(resp.data.data);
					console.log(resp);
				})
				.catch((resp) => console.log(resp));
		},
		[ themes.length ]
	);

	const grid = themes.map((item) => {
		return <Theme id={item.id} key={item.attributes.topic} attributes={item.attributes} />;
	});

	return (
		<div>
			<HomeWrapper />
			<br />
			<Grid>{grid}</Grid>
			<Center>
				<img src="https://64.media.tumblr.com/7973e37fcdd513932e199fada987ad48/tumblr_mqh3isKTJX1rs2sbno1_500.gif" />
			</Center>
			<Buttons className="buttons">
				<Link to="/about">
					<AboutButton type="button" className="About-button">
						About
					</AboutButton>
				</Link>
				<Link to="/create">
					<CreateButton type="button" className="Create-button">
						Create
					</CreateButton>
				</Link>
				<Link to="/question-list">
					<QuestionListButton type="button" className="Questions-button">
						Question List
					</QuestionListButton>
				</Link>
			</Buttons>
		</div>
	);
};

export default Themes;

import React from 'react';
import HomeWrapper from './HomeWrapper';
import AskForm from './AskForm';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Headline = styled.h1`text-align: center;`;

const BackBtn = styled.button`
	border: 2px solid black;
	background-color: #A23944;
	max-width: 100px;
	margin-left: auto;
	margin-right: auto;
	color: black;
	padding: 10px 10px;
	border-radius: 3px;
	display: block;
`;

const Create = () => {
	return (
		<div>
			<HomeWrapper />
			<br />
			<Headline>
				<u>Create a Question</u>
			</Headline>
			<AskForm />
			<br />
			<Link to="/">
				<BackBtn type="button" className="Homepage-button">
					Back
				</BackBtn>
			</Link>
		</div>
	);
};

export default Create;

import React from 'react';
import HomeWrapper from './HomeWrapper';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AboutWrapper = styled.div`
	border: 1.5px solid #000000;
	max-width: 600px;
	line-height: 1.7;
	margin: 0 auto;
	padding: 1.5em;
	background: #fff;
`;

const Headline = styled.h1`text-align: center;`;

const BackBtn = styled.button`
	border: 2px solid black;
	background-color: #eef5b3;
	max-width: 100px;
	margin-left: auto;
	margin-right: auto;
	color: black;
	padding: 10px 10px;
	border-radius: 3px;
	display: block;
`;

function About() {
	return (
		<div>
			<HomeWrapper />
			<br />
			<Headline>
				<u>About</u>
			</Headline>
			<br />
			<AboutWrapper>
				<h4>
					Originally, a question card set from a nursing home that was found in a thrift shop later turned into a web app. The card set was made to help initiate conversations with seniors. However, it can be used for all generations.
				</h4>
			</AboutWrapper>
			<br />
			<Link to="/">
				<BackBtn type="button" className="Homepage-button">
					Back
				</BackBtn>
			</Link>
		</div>
	);
};

export default About;

import React, { Component } from 'react';
import HomeWrapper from './HomeWrapper';
import { connect } from 'react-redux';
import { asksFetchData } from '../actions/questions';
import { Link } from 'react-router-dom';
import Ask from './Theme/Ask';
import styled from 'styled-components';

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

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-gap: 20px;
	width: 100%;
	padding: 30px;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
`;
class QuestionList extends Component {
	componentDidMount() {
		const url = 'http://localhost:3000/api/v1/asks';
		this.props.fetchData(url);
    };

	render() {
		if (this.props.hasErrored) {
			return <p>Sorry! There was an error loading the questions</p>;
		}

		if (this.props.isLoading) {
			return <p>Loading...</p>;
		}

		const ShowGrid = this.props.asks.map((item) => {
			return <Ask key={item.id} id={item.id} question={item.question} />;
		});

		return (
			<div>
				<HomeWrapper />
				<Grid>{ShowGrid}</Grid>
				<br />
				<Link to="/">
					<BackBtn type="button" className="Homepage-button">
						Back
					</BackBtn>
				</Link>
			</div>
		);
    };
};

const mapStateToProps = (state) => {
	return {
		asks: state.asks,
		hasErrored: state.asksHasErrored,
		isLoading: state.asksIsLoading
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (url) => dispatch(asksFetchData(url))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
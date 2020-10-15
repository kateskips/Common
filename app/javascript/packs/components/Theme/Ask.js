import React, { Component } from "react"
import styled from 'styled-components';

const Card = styled.div`
	border: 1.5px solid #000000;
	padding: 1.5em 0;
	background: #fff;
`;

class Ask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clicks: 0,
			show: true
		};
	};
	
	voteUp = () => {
		this.setState(prevState => ({ clicks: prevState.clicks + 1 }));
	};
	voteDown = () => {
		this.setState(prevState => ({ clicks: prevState.clicks - 1 }));
	};
	ToggleClick = () => {
		this.setState({ show: !this.state.show });
	};

	render() {
		return (
			<Card>
				<h4>{this.props.question}</h4>
				<button onClick={this.voteUp}>👍</button>
				<button onClick={this.voteDown}>👎</button>
				<button onClick={this.ToggleClick}>{this.state.show ? '🤭' : '😳'}</button>
				{this.state.show ? <h2>{this.state.clicks}</h2> : ''}
			</Card>
		);
	};
};
export default Ask;

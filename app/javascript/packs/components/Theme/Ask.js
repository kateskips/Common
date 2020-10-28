import React, { Component } from "react"
import styled from 'styled-components';

const Card = styled.div`
	border: 1.5px solid #000000;
	padding: 1.5em 0;
	background: #fff;
`;


class Ask extends Component {
	//constructor method is used to initialize the state
	constructor(props) {
		super(props);
		//want to use 'this.props' in the constructor 
		this.state = {
			//sets the initial state
			clicks: 0,
			show: true
		};
	};
	
	//implement methods: voteUp, voteDown, ToggleClick that the Ask component will run.
	//this.setState schedules an update to the local component state, setState is asynchronous
	//using prevState to override current state with the last state.
	voteUp = () => {
		this.setState(prevState => ({ clicks: prevState.clicks + 1 }));
	};
	voteDown = () => {
		this.setState(prevState => ({ clicks: prevState.clicks - 1 }));
	};
	ToggleClick = () => {
		this.setState({ show: !this.state.show });
		//adding ! operator as a boolean - 'negate'
	};

	render() {
		//event handler --click, accessing them using 'this'
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

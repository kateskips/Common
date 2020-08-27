import React from 'react';
import styled from 'styled-components';

const Home = styled.div`
	text-align: center;
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;
`;

const Header = styled.div`
	padding: 100px 100px 10px 100px;

	h1 {
		font-size: 85px;
	}
`;

const Subheader = styled.div`
	font-weight: 300;
	font-size: 10px;
`;

function HomeWrapper() {
	return (
		<Home>
			<Header>
				<h1>Common</h1>
				<Subheader>
					<h4>Thoughtful ways to bond with a fellow human.</h4>
				</Subheader>
			</Header>
		</Home>
	);
}

export default HomeWrapper;

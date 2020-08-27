import React from 'react';

const Each = (props) => {
	const { topic } = props.attributes;
	return (
		<div className="themeName">
			<h1>
				<u>{topic}</u>
			</h1>
		</div>
	);
};

export default Each;

import React from 'react';

const Theme = (props) => {
    return (
        <div className="card">
            <div className="theme-questions">{props.attributes.topic}</div>
        </div>
    )
}

export default Theme;
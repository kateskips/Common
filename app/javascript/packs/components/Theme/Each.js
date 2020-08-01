import React from 'react';

const Each = (props) => {
    const { topic } = props.attributes
    return (
        <div className="wrapper">
            <div className="theme-name"><h1>{topic}</h1>
                <div className="theme-questions">
                </div>
            </div>
        </div>

    )
}

export default Each;
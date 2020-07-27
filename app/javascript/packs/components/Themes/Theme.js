import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
border: 1.5px solid #000000;
background: #fff
`
const TopicLink = styled.div`
padding: 10px 0 10px 0;
h4 {
    font-size: 16px;
} 
`

const Theme = (props) => {
    return (
        <Card>
            <TopicLink>
                <Link to={(`/themes/${props.id}`)}>{props.attributes.topic}</Link>
            </TopicLink>
        </Card>
    )
}

export default Theme;
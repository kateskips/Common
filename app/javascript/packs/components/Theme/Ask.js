import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
border: 1.5px solid #000000;
padding: 1.5em 0;
background: #fff
`

const Ask = (props) => {
    return (
        <Card>
            <h4>{props.question}</h4>
        </Card>
    )
}

export default Ask;
import React from 'react';
import HomeWrapper from './HomeWrapper'
import AskForm from './AskForm'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BackBtn = styled.button`
border: 2px solid black;
background-color: #eef5b3;
max-width: 100px;
margin-left: auto;
margin-right: auto;
color: black;
padding: 10px 10px;
border-radius: 3px;
`


const Create = () => {
    return (
        <div>
            <HomeWrapper />
            <br></br>
            <center>
                <h1><u>Create a Question</u></h1>
            </center>
            <AskForm />
            <br></br>
            <center>
            <Link to='/'>
                <BackBtn type="button" className="Homepage-button">Back</BackBtn>
                </Link>
            </center>
        </div>
    )
}

export default Create;
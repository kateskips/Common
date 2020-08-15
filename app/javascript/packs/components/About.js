import React from 'react'
import HomeWrapper from './HomeWrapper'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AboutWrapper = styled.div`
border: 1.5px solid #000000;
max-width: 600px;
line-height: 1.7;
margin: 0 auto;
padding: 1.5em;
background: #fff;
` 

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

function About() {
    return (
        <div>
            <HomeWrapper />
            <br></br>
                <center>
                <h1><u>About</u></h1>
                <br></br>
                    <AboutWrapper>
                        <h4>Common all started from a nursing home question card set that I obtained at a local thriftstore in Long Island. This card set was made for the youth to use this set in inititating conversations with seniors. Sometimes it is hard for people to connect with older generations. This in return helps connect and bond with a fellow human being, no matter the age.</h4>
                </AboutWrapper>
                <br></br>
                <Link to='/'>
                    <BackBtn type="button" className="Homepage-button">Back</BackBtn>
                </Link>
                </center>
            </div>
    )
}

export default About
import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Theme from './Theme'
import styled from 'styled-components'



const Home = styled.div`
text-align: center;
max-width: 1200px;
margin-left: auto;
margin-right: auto;
`
const Header = styled.div`
padding: 100px 100px 10px 100px;

h1 {
   font-size: 85px;
}
`
const Subheader = styled.div`
font-weight: 300;
font-size: 10px;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 20px;
width: 100%;
padding: 20px;
`

const Themes = () => {
    const [themes, setThemes] = useState([])
    useEffect(() => {
        //Get all Themes from the Rails API
        //Update Themes in our state
        axios.get('/api/v1/themes.json')
            .then(resp => {
                setThemes(resp.data.data)
                console.log(resp)
            })
            .catch(resp => console.log(resp))
    }, [themes.length])

    const grid = themes.map(item => {
        return (
            <Theme
                id={item.id}
                key={item.attributes.topic}
                attributes={item.attributes}
                />
        )
    })

    return (
        <Home>
          <Header>
                <h1>Common</h1>
                <Subheader>
                <h4>Thoughtful ways to bond with a fellow human.</h4>
                </Subheader> 
                <NavBar />
        <Grid>
            {grid}
            </Grid>
            </Header>
            <img src="https://64.media.tumblr.com/7973e37fcdd513932e199fada987ad48/tumblr_mqh3isKTJX1rs2sbno1_500.gif"></img>
        </Home>
    )
}
export default Themes;
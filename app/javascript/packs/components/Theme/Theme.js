import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Each from './Each'
import { Link } from 'react-router-dom'
import Ask from './Ask'
 
    
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

const BackButton = styled.button`
border: 2px solid black;
background-color: #de9d92;
max-width: 100px;
margin-left: auto;
margin-right: auto;
color: black;
padding: 10px 10px;
border-radius: 3px;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);
grid-gap: 20px;
width: 100%;
padding: 30px;
margin-left: auto;
margin-right: auto;
`


const Theme = (props) => {
    const [theme, setTheme] = useState({})
    const [themeLoaded, setThemeLoaded] = useState(false)

    const [asks, setAsks] = useState([])
    const [asksLoaded, setAsksLoaded] = useState(false)

    useEffect(() => {
        const id = props.match.params.id
        const url = `/api/v1/themes/${id}`
        axios.get(url)
            .then(resp => {
                setTheme(resp.data)
                setThemeLoaded(true)
            })
            .catch(resp => console.log(resp))
    }, [])

    useEffect(() => {
        const id = props.match.params.id
        const url = `/api/v1/asks?theme_id=${id}`
        axios.get(url)
            .then(resp => {
                setAsks(resp.data)
                setAsksLoaded(true)
            })
            .catch(resp => console.log(resp))
    }, [])

    const grid = asks.map(item => {
        return (
            <Ask
                key={item.id}
                id={item.id}
                question={item.question}
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
            </Header>
        <div className="wrapper">
                <div className="column">
                    { themeLoaded &&
                        <Each attributes={theme.data.attributes} />
                    }
                    <div className="asks">
                        <Grid>
                            {grid}
                        </Grid>
                    </div>
                </div>
                
                <Link to='/'>
                    <BackButton type="button" className="Homepage-button">Back</BackButton>
                    </Link>
            </div>
        </Home>
    )
}
export default Theme;
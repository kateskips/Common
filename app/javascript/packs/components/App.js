import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Themes from './Themes/Themes'
import Theme from './Theme/Theme'
import styled from 'styled-components';
import './App.css'
const App = () => {
    return (
        <Switch>
          <Route exact path="/" component={Themes}/>
          <Route exact path="/themes/:id" component={Theme} />
        </Switch>
    )
}

export default App;
import React from 'react'
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom'
import Themes from './Themes/Themes'
import Theme from './Theme/Theme'
import styled from 'styled-components';
import './App.css'
import About from './About'
import Create from './Create'

const App = () => {
  return (
        <Switch>
          <Route exact path="/" component={Themes}/>
      <Route exact path="/themes/:id" component={Theme} />
      <Route exact path="/about" component={About} />
      <Route exact path="/create" component={Create} />
      </Switch>
    )
}

export default App;
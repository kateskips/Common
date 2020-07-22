import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components';
const App = () => {
    return (
        <Switch>
          <Route exact path="/" component={Themes}/>
          <Route exact path="/themes/:id" component={Theme} />
        </Switch>
    )
}

export default App;
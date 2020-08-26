// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//import { createStore, applyMiddleware } from 'redux'
//import allReducers from '../reducers'
//import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import configureStore from './store/configureStore'

import QuestionList from './components/QuestionList'

const store = configureStore();
//const store = createStore(
//  allReducers,
//  applyMiddleware(thunkMiddleware)+
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//)




document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route path="/" component={App}/>
      </Router>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})

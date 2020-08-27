import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import QuestionList from './components/QuestionList';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			<Router>
				<Route path="/" component={App} />
			</Router>
		</Provider>,
		document.body.appendChild(document.createElement('div'))
	);
});

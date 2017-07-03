import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
//import Chart from './graph';

//ReactDOM.render(<Chart />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

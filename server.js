import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, BrowserRouter} from 'react-router-dom';
import App from './App2.js';


console.log("In Sever component");
//const supportsHistory = 'pushState' in window.history
ReactDOM.render(<BrowserRouter>
   <App/>
</BrowserRouter>, document.getElementById('app'));


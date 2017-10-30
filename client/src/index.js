const css= require('./css/app.css');

import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App'; // there is difference between {App} vs import App from "./App"


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

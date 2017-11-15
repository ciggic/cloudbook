const css= require('./css/app.css');

import React from 'react';
import ReactDOM from 'react-dom';
import HeaderBar from './HeaderBar'; // there is difference between {App} vs import App from "./App"


ReactDOM.render(
  <HeaderBar />,
  document.getElementById('root')
);

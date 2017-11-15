const css= require('./css/app.css');

import React from 'react';
import ReactDOM from 'react-dom';
import ButtonAppBar from './ButtonAppBar'; // there is difference between {App} vs import App from "./App"
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <ButtonAppBar />,
  document.getElementById('root')
);

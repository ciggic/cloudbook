
import React from 'react';
import ReactDOM from 'react-dom';
import HeaderBar from './HeaderBar'; // there is difference between {App} vs import App from "./App"
import Center from './CenterBody';

ReactDOM.render(
  <div>
    <HeaderBar /> 
    <br/>    
 </div>,
  document.getElementById('header')
);


ReactDOM.render(
  <div>
    <Center />     
 </div>,
  document.getElementById('center')
);



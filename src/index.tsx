import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Components/TestComponents/ColorPickerResources/js/jquery.js';
import './Components/TestComponents/ColorPickerResources/js/colorpicker.js';
import './Components/TestComponents/ColorPickerResources/js/eye.js';
import './Components/TestComponents/ColorPickerResources/js/layout.js';
import './Components/TestComponents/ColorPickerResources/js/utils.js';
import './Components/TestComponents/ColorPickerResources/css/colorpicker.css';
import './Components/TestComponents/ColorPickerResources/css/layout.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

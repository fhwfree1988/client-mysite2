import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import SecurityComponent from "./Components/Login/Security/SecurityComponent";

ReactDOM.render(
    <React.StrictMode>
        <SecurityComponent/>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();

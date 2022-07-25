import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import SecurityComponent from "./Components/Login/Security/SecurityComponent";
import MainMenu from "./SideBar/MainMenu";
import ProductList from "./Components/Product/ProductList";

ReactDOM.render(
    <React.StrictMode>
        {/*<SecurityComponent/>*/}
        <MainMenu></MainMenu>
        <ProductList></ProductList>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();

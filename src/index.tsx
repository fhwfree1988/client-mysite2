import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import SecurityComponent from "./Components/Login/Security/SecurityComponent";
import MainMenu from "./SideBar/MainMenu";
import ProductList from "./Components/Product/ProductList";
import Authentication from "./Components/Authentication/Authentication";
import {BrowserRouter, Routes} from "react-router-dom";

/*ReactDOM.render(
    <React.StrictMode>
        {/!*<SecurityComponent/>*!/}
        {/!*<MainMenu></MainMenu>*!/}
        <ProductList></ProductList>
    </React.StrictMode>,
    document.getElementById('root')


);*/

const rootElement = document.getElementById("root");
ReactDOM.render(
/*    <SecurityProvider>*/
        <Authentication>
            <BrowserRouter>
                <Routes>
                    {/*<Route path="/chert" element={<Chert/>}/>
                    <Route path="/pert" element={<Pert/>}/>*/}
                </Routes>
                {/*<App/>*/}
                <ProductList></ProductList>
            </BrowserRouter>
        </Authentication>
/*    </SecurityProvider>*/
    , rootElement);
reportWebVitals();

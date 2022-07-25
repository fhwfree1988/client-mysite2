import {useEffect, useState} from "react";
import "./Resources/css/Product.css";
import Product from "./Product";

const ProductList =()=>{
    const[pageState,setPageState] = useState([0]);

    /*client({method: 'GET', path: '/api/employees'}).done(response => {
        this.setState({employees: response.entity._embedded.employees});
    });*/

    useEffect(()=>{
        console.log("Init ProductList")
    },[]);
    return(
        <div className="productlist-container">
            <Product name={"Hi"}></Product>
        </div>
    )
}
export default ProductList;
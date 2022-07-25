import {useState} from "react";
import "./Resources/css/Product.css";
import Product from "./Product";

const ProductList =()=>{
    const[pageState,setPageState] = useState([0]);

    return(
        <div className="productlist-container">
            <Product name={"Hi"}></Product>
        </div>
    )
}
export default ProductList;
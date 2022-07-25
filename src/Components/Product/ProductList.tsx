import React, {useEffect, useState} from "react";
import "./Resources/css/Product.css";
import Product from "./Product";
import ProductService from "./ProductService";

const ProductList =()=>{
    const[pageState,setPageState] = useState([0]);
    const[itemProducts,setItemProductsState] = useState({products:[]});

    /*client({method: 'GET', path: '/api/employees'}).done(response => {
        this.setState({employees: response.entity._embedded.employees});
    });*/
    ProductService.getProducts('P').then((response) => {
        setItemProductsState({ products: response.data})

    });

    useEffect(()=>{
        console.log("Init ProductList")

    },[itemProducts]);

    return(

        <div className="productlist-container">

            {itemProducts.products.map(
                (product: { name: any; }) =>

                    <div><Product name={product.name}/></div>
                )
            }
            {/*<Product name={"Hi"}></Product>*/}
        </div>
    )
}
export default ProductList;
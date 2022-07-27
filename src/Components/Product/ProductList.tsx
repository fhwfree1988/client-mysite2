import React, {useEffect, useState} from "react";
import "./Resources/css/Product.css";
import Product from "./Product";
import ProductService from "./ProductService";

const ProductList =()=>{
    const[pageState,setPageState] = useState([0]);
    const[itemProducts,setItemProductsState] = useState({products:[]});
    let Items = "";
    /*client({method: 'GET', path: '/api/employees'}).done(response => {
        this.setState({employees: response.entity._embedded.employees});
    });*/
    /*ProductService.getProducts('P').then((response) => {
        console.log(response.data);
        //setItemProductsState({ products: response.data})
        itemProducts.products =response.data;
    });*/

    useEffect(()=>{
        console.log("Init ProductList")
        ProductService.getProducts('P').then((response) => {
            console.log(response.data);
            setItemProductsState({ products: response.data})
            //itemProducts.products =response.data;
        });
    },[]);

    return(

        <div className="productlist-container">
            {/*{Items}*/}
            {itemProducts.products.map(
                item <any> =>(
                    <Product name={item.name}/>
                )
            )
            }
            {/*<Product name={"Hi"}></Product>*/}
        </div>
    )
}
export default ProductList;
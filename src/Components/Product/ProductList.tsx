import React, {useEffect, useState} from "react";
import "./Resources/css/Product.css";
import Product from "./Product";
import ProductService from "./ProductService";
import ProductType from "./ProductType";

const ProductList =()=>{
    const[pageState,setPageState] = useState(0);
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
        ProductService.getProducts_byPage(pageState).then((response) => {
            console.log(response.data);
            setItemProductsState({ products: response.data})
            //itemProducts.products =response.data;
        });
    },[pageState]);

    const increasePage = ()=>{
        return pageState + 1;
    }
    // @ts-ignore
    return(

        <div className="productlist-container">
            {/*{Items}*/}
           {/* {itemProducts &&
            <div>{itemProducts.products.map((item: ProductType) => <div><Product name={item.productName}/></div>)}</div>}*/}
            {itemProducts.products.map(
                (item:ProductType) =>(
                    <Product name={item.productName}/>
                )
            )
            }
            <p>Your page is : {pageState} </p>
            <button onClick={() => setPageState(pageState + 1)}>
                Click Me
            </button>
            {/*<Product name={"Hi"}></Product>*/}
        </div>
    )
}
export default ProductList;
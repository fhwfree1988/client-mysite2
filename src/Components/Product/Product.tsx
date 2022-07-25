import "./Resources/css/Product.css";

const Product = (props:any)=>{
    return(
        <div className="product_container">
            {props.name}
        </div>

    )
}

export default Product;
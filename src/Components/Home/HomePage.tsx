import ProductList from "../Product/ProductList";
import "./Resources/Header.css";

const HomePage = ()=>{


    return(
        <div>
           {/* <img src={require('./Resources/Images/style.png')} className="page-style"></img>*/}
            <ProductList></ProductList>
        </div>
    )
}
export default HomePage;
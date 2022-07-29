import axios from 'axios'

const PRODUCT_REST_API_URL = 'http://localhost:8080/products/product/namecontains/';
const PRODUCT_PAGING_REST_API_URL = 'http://localhost:8080/products/product/paging/';

class ProductService {

    getProducts(contain){
        debugger;
        return axios.get(PRODUCT_REST_API_URL + contain, {headers:{'Access-Control-Allow-Origin': '*'}, crossDomain: true})/*.then(data=>{
            //code
        })*/;

    }
    getProducts_byPage(page){
        debugger;
        return axios.get(PRODUCT_PAGING_REST_API_URL + page, {headers:{'Access-Control-Allow-Origin': '*'}, crossDomain: true})/*.then(data=>{
            //code
        })*/;

    }
}

export default new ProductService();
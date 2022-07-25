import axios from 'axios'

const PRODUCT_REST_API_URL = 'http://localhost:8080/products/product/namecontains/';

class ProductService {

    getProducts(contain){
        debugger;
        return axios.get(PRODUCT_REST_API_URL + contain);
    }
}

export default new ProductService();
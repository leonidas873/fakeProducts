import axios from "axios";

const URL = 'https://fakestoreapi.com/';


export const fetchAllProducts = async ()=>{
    const results = await axios.get(URL + "products");
    return results.data;
}

export const fetchSingleProduct = async (productId)=>{
    const results = await axios.get(URL + `products/${productId}`);
    return results.data;
}
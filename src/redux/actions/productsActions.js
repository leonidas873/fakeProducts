import { productsActionTypes } from "../actionTypes/actionTypes"

export const setAllProducts = (data) => {
    return{
        type: productsActionTypes.SET_ALL_PRODUCTS,
        payload:data
    }
}

export const setOpenModal = (products,productId,bool) => {
    const updatedProducts = products.map(product=>(product.id == productId ? {...product,openModal:bool} : product));
    return{
        type: productsActionTypes.SET_OPEN_MODAL,
        payload:updatedProducts
    }
}

export const setSearchQuery = (query) => {
    return {
        type: productsActionTypes.SET_SEARCH_QUERY,
        payload:query
    }
}

export const setMinMaxPrice = (products) => {

    let max = products[0].price;
    let min = products[0].price;
    const setMinMax = price => {
        price > max ? max = price  : max = max;
        price < min ? min = price : min = min;
    }
    products.map(product => {
        setMinMax(product.price)
    })

    return {
        type: productsActionTypes.SET_MIN_MAX_PRICE,
        payload:[min,max]
    }
}

export const setPriceRange = (arr) => {
    return {
        type: productsActionTypes.SET_PRICE_RANGE,
        payload:arr
    }
}

export const setSortType = (sortType)=> {
    return {
        type: productsActionTypes.SET_SORT_TYPE,
        payload:sortType
    }
}

export const setCategory = (category) => {
    return {
        type: productsActionTypes.SET_CATEGORY,
        payload: category
    }
}
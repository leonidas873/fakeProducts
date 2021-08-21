import { productsActionTypes } from "../actionTypes/actionTypes";

const initialState = {
  allProducts: [],
  searchQuery: '',
  priceRange:[],
  minMaxPrice: [],
  category:'',
  sortType:''
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case productsActionTypes.SET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: payload,
      };
    case productsActionTypes.SET_OPEN_MODAL:
      return {
        allProducts: payload,
      };
    case productsActionTypes.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: payload
      }  
    case productsActionTypes.SET_PRICE_RANGE:
      return {
        ...state,
        priceRange: payload
      }
    case productsActionTypes.SET_MIN_MAX_PRICE:
      return {
        ...state,
        minMaxPrice:payload
      }    
    case productsActionTypes.SET_CATEGORY:
      return {
        ...state,
        category: payload
      }  
    case productsActionTypes.SET_SORT_TYPE:
      return {
        ...state,
        sortType: payload
      }  
    default:
      return state;
  }
};

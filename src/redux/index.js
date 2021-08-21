import { combineReducers } from "redux";
import {styleReducer} from './reducers/styleReducer';
import {productsReducer} from './reducers/productsReducer';

const reducers = combineReducers({
    styleStates:styleReducer,
    allProducts:productsReducer
})

export default reducers;
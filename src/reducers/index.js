import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';

export const Reducers = combineReducers({
    cartReducer,
    productsReducer
})
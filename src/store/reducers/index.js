import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer';

const root = combineReducers({
    product: ProductReducer,
});

export default root;

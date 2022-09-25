import { combineReducers } from 'redux'
import ProductReducer from './ProductReducer'
import CartReducer from './CartReducer'


const root = combineReducers({
    product:ProductReducer,
    cart:CartReducer
})

export default root;

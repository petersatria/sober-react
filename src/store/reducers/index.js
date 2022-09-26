import { combineReducers } from 'redux'
import ProductReducer from './ProductReducer'
import CartReducer from './CartReducer'
import LoginReducer from './LoginReducer'



const root = combineReducers({
    product: ProductReducer,
    cart: CartReducer,
    user:LoginReducer
})

export default root;

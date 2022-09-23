import { addCart } from '../store/actions/CartAction'
import { useDispatch } from 'react-redux'
export default function Test(){
    const dispatch = useDispatch()
    const data = [
        {productId:'6329b91cd5dfd5b94b396902', cartId:'632cb38f55b627d11bc08d8f', quantity:1, product:[{_id:'6329b91cd5dfd5b94b396902'}]},
        {productId:'6329ba4fd5dfd5b94b396906', cartId:'632cb38f55b627d11bc08d8f', quantity:1, product:[{_id:'6329ba4fd5dfd5b94b396906'}]},
    ]
    function product(data){
        dispatch(addCart(data))
    }

    return(
        <>
        <button onClick={()=>{product(data[0])}}>add product 1</button>
        <button onClick={()=>{product(data[1])}}>add product 2</button>

            <h1>Hello Test</h1>
        </>
    )
}
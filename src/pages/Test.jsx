import { addCart } from '../store/actions/CartAction'
import { useDispatch } from 'react-redux'
export default function Test(){
    const dispatch = useDispatch()
    const data = [
        {productId:'1', cartId:'', quantity:1, 
        product:{
            id:'1',
            name:'Ear Headphones',
            detail:'String',
            thumbnail:'https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-13-433x516.jpg',
            recommendation:'Boolean',
            price:'180.00',
            images:[],
            stock:'Number',
            deleted:'Boolean'}
        },
        {productId:'2', cartId:'', quantity:1, 
        product:{
            id:'2',
            name:'	Crewneck Blouse',
            detail:'String',
            thumbnail:'https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-433x516.jpg',
            recommendation:'Boolean',
            price:'215.00',
            images:[],
            stock:'Number',
            deleted:'Boolean'}
        }
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
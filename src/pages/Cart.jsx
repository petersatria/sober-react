import { Test } from './index'
import styles from '../css/Cart.module.css'
import { changeQty } from '../store/actions/CartAction'
import { useSelector,useDispatch } from 'react-redux'

export default function Cart(){
    const { carts } = useSelector(state=>state.cart)
    const dispatch = useDispatch()

    const onChangeHandle=(e, productId)=>{
        dispatch(changeQty(+e.target.value,productId))

    }

    const onClickHandle=(number,productId)=>{
        dispatch(changeQty(+number,productId))
    }   

    return(
        <div>
            <Test/>
            <div className={styles.subHeader}>
                <div className={styles.subHeaderText}>
                    Shopping Cart 
                    <div className={styles.cartNumber}>{carts.length}</div>
                </div>
            </div>
                <div className={`${styles.cartContent} mt-5`}>
                    <table className={`${styles.tableCart} w-75`}>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            carts.map((val,index)=>{
                                return(
                                    <tr key={index}>
                                        <td><img src={`${val.product.thumbnail}`} width={100}/><span className='m-2'>{val.product.name}</span></td>
                                        <td>$ {val.product.price}</td>
                                        <td>QTY: <button onClick={()=>{onClickHandle(+val.quantity+1,val.productId)}}>+</button><input onChange={(e)=>{onChangeHandle(e,val.productId)}} placeholder={val.quantity}/><button onClick={()=>{onClickHandle(+val.quantity-1,val.productId)}}>-</button></td>
                                        <td>$ {val.quantity*val.product.price}.00</td>
                                        <td>X</td>
                                    </tr>  
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
        </div>
    )
}
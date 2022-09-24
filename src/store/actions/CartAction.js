import axios from 'axios'

export const getCart=(userId='62dd766bcf569a60ceded351')=>{
    return async (dispatch)=>{
        try {
            const {data} = await axios.get(`http://localhost:5000/cart/${userId}`)
            dispatch({
                type:'FETCH_CART',
                payload:data.carts
            })
        } catch (error) {
            console.log(error)
        }
        
    }
}


export const addCart=(data, userId='62dd766bcf569a60ceded351')=>{
    return async (dispatch, state)=>{
        try {
            const { carts } = state().cart
            const findProductInCart = carts.filter((val)=>val.productId===data.product[0]._id)
            
            if(findProductInCart.length>0){
                const newQuantity = {...findProductInCart[0], quantity:findProductInCart[0].quantity+1}
                const filterData = carts.filter((val)=>val.productId!==data.product[0]._id).concat(newQuantity)
                await axios.patch(`http://localhost:5000/cart`, {cartId:data.cartId, productId:data.productId, quantity:findProductInCart[0].quantity+1})
                dispatch({
                    type:'CHANGE_QUANTITY',
                    payload:filterData
                })
            }else{
                const carts = await axios.post(`http://localhost:5000/cart`, {userId, productId:data.productId, quantity:1})
                dispatch({
                    type:'ADD_TO_CART',
                    payload:carts.data.carts
                })
            }
        } catch (error) {
            console.log(error)
        }


    }
}


export const changeQty=(qty,productId)=>{
    return async(dispatch,state)=>{
        try {
            const { carts } = state().cart
            const findProductInCart = carts.filter((val)=>val.productId===productId)
            
            const newQuantity = {...findProductInCart[0], quantity:qty}
            const filterData = carts.filter((val)=>val.productId!==productId).concat(newQuantity)


            await axios.patch(`http://localhost:5000/cart`, {cartId:findProductInCart[0].cartId, productId:productId, quantity:qty})
            
            dispatch({
                type:'CHANGE_QUANTITY',
                payload:filterData
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}


export const deleteProduct=(productId, cartId)=>{
    return async(dispatch, state)=>{
        const { carts } = state().cart
        const newCarts = carts.filter((val)=>val.productId!==productId)

        await axios.post(`http://localhost:5000/delete-product-incart`, {cartId:cartId, productId:productId})

        dispatch({
            type:'DELETE_PRODUCT_IN_CARTS',
            payload:newCarts
        })
    }
}
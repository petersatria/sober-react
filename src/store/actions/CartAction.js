export const addCart=(data)=>{
    console.log(data)
    return (dispatch, state)=>{
        const { carts } = state().cart
        const findProductInCart = carts.filter((val)=>val.productId==data.product.id)
        
        if(findProductInCart.length>0){
            const newQuantity = {...findProductInCart[0], quantity:findProductInCart[0].quantity+1}
            const filterData = carts.filter((val)=>val.productId!=data.product.id).concat(newQuantity)

            dispatch({
                type:'CHANGE_QUANTITY',
                payload:filterData
            })
        }else{
            console.log('add to cart')
            dispatch({
                type:'ADD_TO_CART',
                payload:data
            })
        }

    }
}


export const changeQty=(qty,productId)=>{
    return (dispatch,state)=>{
        const { carts } = state().cart
        const findProductInCart = carts.filter((val)=>val.productId==productId)

        const newQuantity = {...findProductInCart[0], quantity:qty}
        const filterData = carts.filter((val)=>val.productId!=productId).concat(newQuantity)
        console.log(filterData)
        dispatch({
            type:'CHANGE_QUANTITY',
            payload:filterData
        })
    }
}



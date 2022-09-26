import axios from 'axios'
import { getCookie } from '../../moduleComponents/cookie'
const url = `http://localhost:5000/`

export const getCart = () => {
    const token = JSON.parse(getCookie('userCookie'))
    let userId = '0'
    if (token) {
        userId = token.id
    }
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${url}cart/${userId}`)
            dispatch({
                type: 'FETCH_CART',
                payload: data.carts
            })
        } catch (error) {
            console.log(error)
        }

    }
}


export const addCart = (data) => {
    const token = JSON.parse(getCookie('userCookie'))
    let userId = '0'
    if (token) {
        userId = token.id
    }



    return async (dispatch, state) => {
        try {
            const { carts } = state().cart
            const findProductInCart = carts.filter((val) => val.productId == data.productId)
            const quantity = data.quantity ? +data.quantity : 1
            if (findProductInCart.length > 0) {
                const newQuantity = { ...findProductInCart[0], quantity: findProductInCart[0].quantity + quantity }
                const filterData = carts.filter((val) => val.productId !== data.productId).concat(newQuantity)
                await axios.patch(`${url}cart`, { cartId: findProductInCart[0].cartId, productId: data.productId, quantity: findProductInCart[0].quantity + quantity })
                dispatch({
                    type: 'CHANGE_QUANTITY',
                    payload: filterData
                })
            } else {
                const carts = await axios.post(`${url}cart`, { userId, productId: data.productId, quantity: 1, cartId: data.cartId })
                dispatch({
                    type: 'ADD_TO_CART',
                    payload: carts.data.carts
                })

            }
        } catch (error) {
            console.log(error)
        }


    }
}


export const changeQty = (qty, productId) => {
    const token = JSON.parse(getCookie('userCookie'))
    let userId = '0'
    if (token) {
        userId = token.id
    }
    return async (dispatch, state) => {
        try {
            const { carts } = state().cart
            const findProductInCart = carts.filter((val) => val.productId === productId)

            const newQuantity = { ...findProductInCart[0], quantity: qty }
            const filterData = carts.filter((val) => val.productId !== productId).concat(newQuantity)


            await axios.patch(`${url}cart`, { cartId: findProductInCart[0].cartId, productId: productId, quantity: qty })

            dispatch({
                type: 'CHANGE_QUANTITY',
                payload: filterData
            })

        } catch (error) {
            console.log(error)
        }
    }
}


export const deleteProduct = (productId, cartId) => {
    const token = JSON.parse(getCookie('userCookie'))
    let userId = '0'
    if (token) {
        userId = token.id
    }
    return async (dispatch, state) => {
        const { carts } = state().cart
        const newCarts = carts.filter((val) => val.productId !== productId)

        await axios.post(`${url}delete-product-incart`, { cartId: cartId, productId: productId })

        dispatch({
            type: 'DELETE_PRODUCT_IN_CARTS',
            payload: newCarts
        })
    }
}


export const checkoutCart = ({ total_order, carts }, id, navigate) => {
    const token = JSON.parse(getCookie('userCookie'))
    let userId = '0'
    if (token) {
        userId = token.id
    }
    return async (dispatch, state) => {
        let dataPost = {
            total_order,
            userId,
            carts
        }
        try {
            const { data } = await axios.post(`${url}getTokenPayment`, { userId, total_order })
            console.log(data)
            window.snap.pay(data, {
                onSuccess: async () => {
                    console.log('success')
                    await axios.post(`${url}transactionHistoryPost`, dataPost)
                    dispatch({
                        type: 'CHECKOUT_CART'
                    })

                    navigate('/order-list/' + userId)
                },
                onClose: function () {
                    // muncul ketika event snap di close
                    console.log('closed failed')
                }
            })

        } catch (error) {
            console.log(error)
        }
    }
}
const INITIAL_STATE = {
    carts:[]
}

function reducer(state=INITIAL_STATE,action){
    switch(action.type){
        case 'FETCH_CART':
            return {...state, carts:action.payload}
        case 'ADD_TO_CART':
            return {...state, carts:action.payload}
        case 'CHANGE_QUANTITY':
            return {...state, carts:action.payload}
        case 'DELETE_PRODUCT_IN_CARTS':
            return {...state, carts:action.payload}
        case 'CHECKOUT_CART':
            console.log('masuk')
            return{...state, carts:[]}
        default:
            return state
    }
}

export default reducer
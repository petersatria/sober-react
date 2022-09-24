const INITIAL_STATE = {
    products:[]
}

function reducer(state=INITIAL_STATE,action){
    switch(action.type){
        case 'ADD_PRODUCT_EXAMPLE':
            return {...state, products:state.products.concat(action.data)}
        default:
            return state
    }
}

export default reducer
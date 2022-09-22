const INITIAL_STATE = {
    carts:[
        {productId:1, cartId:'', quantity:1, 
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
        }
    ]
}

function reducer(state=INITIAL_STATE,action){
    switch(action.type){
        case 'ADD_TO_CART':
            const newState = state.carts.concat(action.payload)
            return {...state, carts:newState}
        case 'CHANGE_QUANTITY':
            return {...state, carts:action.payload}

        default:
            return state
    }
}

export default reducer
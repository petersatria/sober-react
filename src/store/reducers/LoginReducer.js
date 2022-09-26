const INITIAL_STATE = {
    isLoggedIn:false,
    username:''
}

function reducer(state=INITIAL_STATE,action){
    switch(action.type){
        case 'LOGIN':
            return {...state, isLoggedIn:true, username:action.payload}
        case 'LOGOUT':
            console.log('masuk')
            return {...state, isLoggedIn:false, username:''}
        default:
            return state
    }
}

export default reducer
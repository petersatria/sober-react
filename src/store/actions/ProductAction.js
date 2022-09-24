export const AddProductExample=(data)=>{
    return (dispatch)=>{
            dispatch({
                type:'ADD_PRODUCT_EXAMPLE',
                data:{
                    name:'a',
                    category:'b'
                }
        })
    }
}



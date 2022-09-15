import { useSelector,useDispatch } from 'react-redux'
import { AddProductExample } from '../store/actions/ProductAction'
import { useEffect } from 'react'
export default function Homepage(){
    const state = useSelector(state=>state)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(AddProductExample())
    },[])   

    console.log(state)

    return(
        <>
            <h1>Hello Homepage</h1>
        </>
    )
}
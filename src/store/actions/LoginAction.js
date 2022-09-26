import { getCookie } from '../../moduleComponents/cookie'
export const loginUser=(username)=>{
    return {
        type:'LOGIN',
        payload:username
    }
}


export const logoutUser=()=>{
    return {
        type:'LOGOUT'
    }
}


export const checkLogin=()=>{
    const cookie = JSON.parse(getCookie('userCookie'))
    if(cookie?.username){
        return {
            type:'LOGIN',
            payload:cookie.username
        }
    }else{
        return {
            type:'LOGOUT'
        }
    }
}
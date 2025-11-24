import { CURRENT, LOGIN, LOGOUT, REGISTER } from "../TypesActions/UserTypesActions"
import { handelerror } from "./ErrorActions"
import axios from"axios"

export const register=(newuser,navigate)=>async(dispatch)=>{
    try {
        const res= await axios.post('/user/signup',newuser)
        dispatch({
            type:REGISTER,
            payload:res.data
        })
        navigate('/Profil')
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handelerror(element.msg))
        });
    }
}


export const login=(logged,navigate)=>async(dispatch)=>{
try {
    const res= await axios.post('/user/signin',logged)
    dispatch({
        type:LOGIN,
        payload:res.data
    })

    navigate('/Profil')
} catch (error) {
      error.response.data.errors.forEach(element => {
            dispatch(handelerror(element.msg))
        });
}
}


export const current =()=>async(dispatch)=>{
    try {
   const config= {
    Headers : {authorized: localStorage.getItem('token')   }}

    const res= await axios.get('/user/current',config)
    dispatch({
        type:CURRENT,
        payload:res.data

    })
        
    } catch (error) {
         error.response.data.errors.forEach(element => {
            dispatch(handelerror(element.msg))
        });
    }

}
export const logout=()=>{
    return({
        type:LOGOUT
    })
}
import { CURRENT, LOGIN, LOGOUT, REGISTER } from "../TypesActions/UserTypesActions"

const intitialState={
    user:{}
}
const UserReducer=(state=intitialState,action)=>{
    switch (action.type) {
        case REGISTER:  localStorage.setItem('token',action.payload.token)
        return {...state,user:action.payload.newUser}

        case LOGIN : localStorage.setItem('token',action.payload.token)
        return {...state,user:action.payload.found}

        case CURRENT : return {...state,user:action.payload}
        case LOGOUT: localStorage.removeItem('token')
        return {...state,user:{}}


    
        default: return state
  
    }
}
export default  UserReducer
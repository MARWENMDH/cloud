import { CLEARERROR, HANDELERROR } from "../TypesActions/ErrorTypesActions"

const intitialState=[]
const ErrorReducer=(state=intitialState,action)=>{
    switch (action.type) {
        case HANDELERROR: return [...state,action.payload]
        case CLEARERROR: return state.filter((el)=>el.id!==action.payload)

    
        default: return state

    }
}
export default ErrorReducer
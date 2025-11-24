import { CLEARERROR, HANDELERROR } from "../TypesActions/ErrorTypesActions"

export const handelerror=(msg)=>(dispatch)=>{
const id=Math.random()
    dispatch({
        type:HANDELERROR,
        payload:{id,msg}
    })

    setTimeout(() => {
        dispatch({
            type:CLEARERROR,
            payload:id
        })
    }, 3000);
    


}
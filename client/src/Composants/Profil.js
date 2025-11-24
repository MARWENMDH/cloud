import { useEffect } from "react"
import { current } from "../Redux/Actions/UserAction"
import { useDispatch, useSelector } from "react-redux"


const Profil = () => {
  const dispatch=useDispatch()

  useEffect (()=>{
    dispatch(current())

  },[dispatch])

  const user=useSelector(state=>state.UserReducer.user)
  return (
    <div>{user.name}</div>
  )
}

export default Profil
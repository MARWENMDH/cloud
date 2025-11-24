import { Navigate } from "react-router-dom"


const PrivateRoute = ({childen}) => {
    const token=localStorage.getItem('token')
  return (
    <div>
        {token? childen : <Navigate to='/'/>}
    </div>
  )
}

export default PrivateRoute
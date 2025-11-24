
import { useSelector } from 'react-redux'

const Err = () => {
    const err=useSelector(state=>state.ErrorReducer)
  return (
    <div>

        {err.map((el)=> el.msg)}
      
    </div>
  )
}

export default Err

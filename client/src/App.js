
import './App.css';
import Err from './Composants/Err';
import Home from './Composants/Home';
import LogIn from './Composants/LogIn';
import NavUser from './Composants/NavUser';
import PrivateRoute from './Composants/PrivateRoute';
import Profil from './Composants/Profil';
import Register from './Composants/Register';
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
<div>
  <NavUser/>
  <Err/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/Register' element={<Register/>}></Route>
  <Route path='/LogIn' element={<LogIn/>}></Route>
  <Route path='/Profil' element={<PrivateRoute><Profil/></PrivateRoute> }></Route>
  </Routes>
</div>
  );
}

export default App;

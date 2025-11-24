
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../Redux/Actions/UserAction';
const NavUser = () => {
  const token=localStorage.getItem('token')
  const user=useSelector(state=>state.UserReducer.user)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  return (
          <Navbar bg="warning" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">

            {user && token ? <>
            <Nav.Link as={Link} to='/' >Home</Nav.Link>
            <Nav.Link  as={Link} to='/Profil'>profil</Nav.Link>
            <Nav.Link  onClick={()=>{navigate('/');dispatch(logout())}}>LOGout</Nav.Link>
            </> : <>
            <Nav.Link as={Link} to='/' >Home</Nav.Link>
            <Nav.Link  as={Link} to='/Register'>REGISTER</Nav.Link>
            <Nav.Link  as={Link} to='/LogIn'>LOGIN</Nav.Link></>}
            
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavUser
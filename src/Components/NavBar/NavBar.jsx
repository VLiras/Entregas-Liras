import { Button } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Form from 'react-bootstrap/Form'
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link, NavLink } from "react-router-dom"
import Cart from "../CartWidget/CartWidget" //Contenedor Local
import User from "../User/User"
import Search from "../Search/SearchBar"
// import gallery from '../NavBar/gallery.png';
function NavBar(){
    return(
      
    // <nav className="bar center d-none">
    //      <div className="wrap">
    //      <div className="navOptions"><li>Ofertas</li></div>
    //      <div className="navOptions"><li>Publicados Recientemente</li></div>
    //      <div className="navOptions"><li>Dispositivos</li></div>{/* => Dropdown*/}
    //      <div className="navOptions"><li>Publicar</li></div>
    //      <div><Cart/></div>
    //      </div>
    // </nav>

    <Navbar bg="dark" expand="lg" className="navBar">
        <Container>
            <Navbar.Collapse id="basic-navbar-nav" className="h-100">
                <Nav className="w-100 row">
                    <NavLink to='/minicomponentes' className="navs text-light col-3">Minicomponentes</NavLink>
                    <NavLink to='/torres' className="navs text-light col-3">Torres</NavLink>
                    <NavLink to='/auriculares' className="navs text-light col-3">Auriculares</NavLink>
                    <Link to='/cart' href="#link" className="navs text-light col-3"><Cart/></Link>                       
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>



    )  
}
export default NavBar
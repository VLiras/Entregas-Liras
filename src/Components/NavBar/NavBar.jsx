import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link, NavLink } from "react-router-dom"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import Cart from "../CartWidget/CartWidget"
function NavBar(){
    const [categories,setCategories] = useState([])
    useEffect(() => {
    const db = getFirestore()
    const bCategories = collection(db,'Categories')
    getDocs(bCategories)
    .then(ans => setCategories(ans.docs.map(category => ({name:category.name,...category.data()}))))
    .catch(err => console.error(err))
    .finally(() => {})
    },[])
    return(
    <Navbar bg="dark" expand="lg" className="navBar">
        <Container>
            <Navbar.Collapse id="basic-navbar-nav" className="h-100">
                <Nav className="w-100 row">
                    {
                        categories.map(cat => 
                        <NavLink key={cat.id} to={cat.path} className="navs text-light col-3">{cat.name}</NavLink>
                        )
                    }
                    <Link to='/cart' href="#link" className="navs text-light col-3"><Cart/></Link>                       
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>



    )  
}
export default NavBar
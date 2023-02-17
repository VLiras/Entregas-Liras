import { Link } from "react-router-dom"
import Search from "../Search/SearchBar"
import User from "../User/User"
const LogIn =()=>{
    return(
        <div className="log center row mt-3">
            <div className="col-6"><button className="btn btn-primary rounded-pill w-75">Ingresar</button></div>
            <div className="col-6"><button className="btn btn-light rounded-pill w-75">Registrarse</button></div>
        </div>
    )
}



function Header(){
    return(
        <div className="header row mb-3">
            <div className="first col-3"><Link to='/' className="text-light">DeepAudio</Link></div>
            <div className="col-6"><Search/></div>
            <div className="col-3 border">
                <User/>
            </div>
        </div>
    )
}
export default Header
import { Link } from "react-router-dom"
import Search from "../Search/SearchBar"
import User from "../User/User"
function Header(){
    return(
        <div className="header row mb-3">
            <div className="first col-3"><Link to='/' className="text-light">DeepAudio</Link></div>
            <div className="col-6"><Search/></div>
            <div className="col-3 pt-3"><User/></div>
        </div>
    )
}
export default Header
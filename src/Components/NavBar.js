import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";
import './NavBar.css'

const NavBar = () => {

    const auth = useAuth();

    return (
        <div className = "nav-bar">
            <a href="/"><h2 >Builders List </h2></a>
            <Link to="/"> Home   </Link> 
            <Link to="/login"> Login      </Link>
            <Link to="/registration"> Registration New User   </Link>
            <Link to="/list"> Find Builders   </Link>
            <Link to="/entry-form"> New Builder </Link>
            
            
            <button onClick={()=>{
                auth.logout()
            }}>Logout</button>
        </div>
    )
}
export default NavBar;
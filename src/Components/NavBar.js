import { Link } from "react-router-dom";
// import { useAuth } from "../Hooks/Auth";
import './NavBar.css'
import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {authCheck, logout} from '../redux/authSlice'

const NavBar = () => {
    const dispatch = useDispatch()
    const auth = useSelector( state => state.auth.isAuth )
    const users = useSelector( state => state.users )

    // const auth = useAuth();

    return (
        <div className = "nav-bar">
            <a href="/"><h2 >Builders List </h2></a>
            <Link to="/"> Home   </Link> 
            <Link to="/login"> Login      </Link>
            <Link to="/registration"> Register New User   </Link>
            <Link to=""> Account   </Link>
            <Link to="/list"> Find Builders   </Link>
            <Link to="/entry-form"> New Builder </Link>
            <Link to="">Blogs</Link>
            
            <button onClick={()=>{
                dispatch(logout())
                // auth.logout()
            }}>Logout</button>
        </div>
    )
}
export default NavBar;
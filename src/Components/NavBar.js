import { Link } from "react-router-dom";
import "./NavBar.css";
import React from "react";
// import store from "../redux/store";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  //   const auth = store.auth; // for future auth checks

  return (
    <div className="nav-bar">
      <a href="/">
        <h2>Builders List </h2>
      </a>
      <Link to="/"> Home </Link>
      <Link to="/login"> Login </Link>
      <Link to="/registration"> Register New User </Link>
      <Link to="/update-user"> Update Account </Link>
      <Link to="/list"> Find Builders </Link>
      <Link to="/entry-form"> New Builder </Link>
      <Link to="/redirect"> Edit Builder </Link>
      <Link to="/blogs">Blogs</Link>

      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};
export default NavBar;

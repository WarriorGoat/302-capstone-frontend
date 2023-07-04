import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authCheck, logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

//home page component
const HomePage = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuth);
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(authCheck());
  }, [auth]);

  return (
    <div>
      <h1>Welcome to Builders List </h1>
      <h2>Helping you find qualified builders and subcontractors near you!!</h2>
      <h3>{auth ? <>Welcome: {users.firstName}</> : <>Please Login</>}</h3>

      {auth ? (
        <>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <>
          <button type="button" onClick={() => navigate("/login")}>
            Login
          </button>
          <button type="button" onClick={() => navigate("/registration")}>
            {" "}
            Register
          </button>
        </>
      )}
    </div>
  );
};

export default HomePage;

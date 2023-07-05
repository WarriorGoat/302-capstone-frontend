import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, resetStatus } from "../redux/usersSlice";
import { authCheck, logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const auth = useSelector((state) => state.auth.isAuth);
  const status = useSelector((state) => state.users.status);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // be able to navigate to home on login

  useEffect(() => {
    if (status === "fulfilled") {
      dispatch(resetStatus());
      navigate("/", { replace: true });
    }
  }, [status]);

  useEffect(() => {
    dispatch(authCheck());
  }, [auth]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let userObj = {
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(login(userObj));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {auth ? (
        <>
          <h2>You are already logged in.</h2>
          <button className="button" onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Login Page</h1>
          <label>email</label>
          <input
            type="text"
            id="email"
            label="Email"
            name="email"
            autoComplete="none"
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            label="Password"
            id="password"
            autoComplete="none"
          />

          <button type="submit" className="button" >Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;

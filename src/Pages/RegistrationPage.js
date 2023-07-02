import { useNavigate } from "react-router-dom";
import { registerUser } from "../redux/usersSlice";
import { authCheck, logout } from "../redux/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// import Select from 'react-dropdown-select';

const RegistrationPage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.users.status);
  const scopeTypes = ["user", "contractor", "admin"];
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (status === "fulfilled") {
      console.log("Registration successful");
      navigate("/login");
    }
  }, [status]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Registration form activated");
    const data = new FormData(event.currentTarget);
    let userObj = {
      scope: data.get("scope"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(registerUser(userObj));
    console.log("Registration form submitted")
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Registration Page</h1>
        <div>
          <label>Select Your User Type: </label>
          <select
            name="scope"
            id="scope"
            required="required"
            type="select"
            onChange={(value) => setSelected(value)}
          >
            {scopeTypes.map((type) => (
              <option value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" type="text" name="firstName" required/>
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" type="text" name="lastName" required/>
          <br />
          <label htmlFor="email">email</label>
          <input id="email" type="text" name="email" required/>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required/>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default RegistrationPage;

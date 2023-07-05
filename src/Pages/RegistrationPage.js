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
      navigate("/login");
    }
  }, [status]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let userObj = {
      scope: data.get("scope"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };

    //verify that both password entries match
    if (userObj.password !== data.get("password2")) {
      return alert("Passwords do not Match");
    }
    dispatch(registerUser(userObj));
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
          <span>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" type="text" name="firstName" required />
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" type="text" name="lastName" required />
          </span>
          <span>
            <label htmlFor="email">email</label>
            <input id="email" type="text" name="email" required />
          </span>
          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" required />
            <label htmlFor="password2">Re-enter Password</label>
            <input id="password2" type="password" name="password2" required />
          </div>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default RegistrationPage;

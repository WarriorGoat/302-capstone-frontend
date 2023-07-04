import { useNavigate } from "react-router-dom";
import { updateUser } from "../redux/usersSlice";
import { authCheck, logout } from "../redux/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// import store from "../redux/store";
// import Select from 'react-dropdown-select';

const UpdateAcctPage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.isAuth);
  const users = useSelector((state) => state.users)
  const scopeTypes = ["user", "contractor", "admin"];
  const [selected, setSelected] = useState(null);

//   useEffect(() => {
//     if (auth !== true) {
//       navigate("/login");
//     }
//   }, [auth]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let input={
        scope: data.get("scope"),
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        password: data.get("password"),
    }
    let newScope=""
    let newFirstName=""
    let newLastName=""
    let newPassword=""

    input.scope.length===0?(newScope=users.scope):(newScope=data.get("scope"))
    input.firstName.length===0?(newFirstName=users.firstName):(newFirstName=data.get("firstName"))
    input.lastName.length===0?(newLastName=users.lastName):(newLastName=data.get("lastName"))
    input.password.length===0?(newPassword=users.password):(newPassword=data.get("password"))

    let newUserObj = {
        scope: newScope,
        email: users.email,
        firstName: newFirstName,
        lastName: newLastName,
        password: newPassword,
    };

       //verify that both password entries match
       if (newUserObj.password !== data.get("password2")) {
        return console.log("Passwords do not Match");
     } else {
         console.log("Passwords Matched");
     }
    dispatch(updateUser(newUserObj));
    console.log("Account Update submitted")
  };

  const handleDelete = (event) => {
    event.preventDefault();

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Update Your Account</h1>
        <h3>email: {users.email}</h3>
        <div>
          <label>Select Your User Type: </label>
          <select
            name="scope"
            id="scope"
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
            <input 
                id="firstName" 
                type="text" 
                name="firstName" 
                placeholder={users.firstName}
                />
            <label htmlFor="lastName">Last Name</label>
            <input 
                id="lastName" 
                type="text" 
                name="lastName" 
                placeholder={users.lastName}
                />
          </span>
          <div>
            <label htmlFor="password">Password</label>
            <input 
                id="password" 
                type="password" 
                name="password" 
                />
            <label htmlFor="password2">Re-enter Password</label>
            <input
              id="password2"
              type="password"
              name="password2"
            />
          </div>
        </div>
        <button type="submit">Update</button>
      </form>
      <form onSubmit={handleDelete}>
      <button type="submit">Delete Account!!</button>
      </form>
    </div>
  );
};

export default UpdateAcctPage;

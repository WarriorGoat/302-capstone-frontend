import { useState } from "react";
import { useAuth } from "../Hooks/Auth";
import { useNavigate } from "react-router-dom";

const RegistrationPage = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registerMessage, setRegisterMessage] = useState("");

  //we are accessing the authentication context from within our 
  // component 
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Registration Page</h1>
      <h3>{registerMessage}</h3>
      <label>First Name</label>
      <input
        type="text"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <label>Last Name</label>
      <input
        type="text"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <label>email</label>
      <input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={async () => {
          const registerResult = await auth.register(firstName, lastName, email, password);
          if (registerResult.success) {
						navigate("/login");
          }
          if (!registerResult.success) {
            setRegisterMessage(registerResult.message);
          }
        }}
      >
        Signup
      </button>
    </div>
  );
};

export default RegistrationPage;
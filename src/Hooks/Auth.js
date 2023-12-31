import { useState, useEffect, createContext, useContext, useMemo } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  //did component update
  useEffect(() => {
    const userData = getLSUserData(); //get session data if session is still active from the browser

    //if isAuthLoading changes, set the setUserToken and setUserEmail
    if (userData && userData.token) {
      setUserToken(userData.token);
    }
    if (userData && userData.email) {
      setUserEmail(userData.email);
    }
  }, [isAuthLoading]);

  // call this function when you want to register the user
  const register = async (firstName, lastName, email, password) => {
    setIsAuthLoading(true);
    const registerResult = await registerUser(
      firstName,
      lastName,
      email,
      password
    );
    setIsAuthLoading(false);
    return registerResult;
  };

  // call this function when you want to authenticate the user
  const login = async (email, password) => {
    setIsAuthLoading(true);
    const loginResult = await loginUser(email, password);
    console.log("auth hook loginResult: ", loginResult);
    if (loginResult.success) {
      //update browser session details
      setLSUserData(loginResult.token, loginResult.email);
    }
    setIsAuthLoading(false);
    return loginResult;
  };

  // call this function to sign out logged in user
  const logout = async () => {
    setIsAuthLoading(true);
    await removeLSUserData(); // This has to be awaited for the useEffect to work
    setUserToken(null);
    setUserEmail("");
    setIsAuthLoading(false);
  };

  /*  
    https://reactjs.org/docs/hooks-reference.html#usememo
    Memoization is essentially caching. The variable value will only be recalculated if the 
    variables in the watched array change.
  */
  const value = useMemo(
    () => ({
      userToken,
      userEmail,
      login,
      logout,
      register,
    }),
    [userToken, userEmail]
  );
  // children in this case refers to <App> #SEE index.js
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

//this function makes the context of Auth accessible to other compoents
export const useAuth = () => {
  return useContext(AuthContext);
};

const registerUser = async (firstName, lastName, email, password) => {
  const url = `${process.env.REACT_APP_BACKEND}/users/registration`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
    }),
  });
  const responseJSON = await response.json();
  return responseJSON;
};

const loginUser = async (email, password) => {
  const url = `${process.env.REACT_APP_BACKEND}/users/login`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const responseJSON = await response.json();
  return responseJSON;
};

const setLSUserData = (token, email) => {
  // caching our token session/ email
  // in the browser window
  localStorage.setItem(
    process.env.REACT_APP_TOKEN_HEADER_KEY,
    JSON.stringify({ token, email })
  );
  return true;
};

const removeLSUserData = () => {
  //remove session from browser
  localStorage.removeItem(process.env.REACT_APP_TOKEN_HEADER_KEY);
  return true;
};

const getLSUserData = () => {
  //get session from browser
  return JSON.parse(
    localStorage.getItem(process.env.REACT_APP_TOKEN_HEADER_KEY)
  );
};

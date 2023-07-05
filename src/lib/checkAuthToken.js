import { setHeaderToken } from "./setHeaderToken";

export const checkAuthToken = () => {
  let jwtToken = localStorage.getItem("jwtToken");

  if (jwtToken) {
    // set headers
    setHeaderToken(jwtToken);
    // set auth is true
    return true;
  } else {
    // delete headers
    setHeaderToken();
    // set auth to false
    return false;
  }
};

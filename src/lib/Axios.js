import axios from "axios";

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND === "production"? "/api" : 'http://localhost:5002/api'
});

export default Axios;

import {useState, useEffect} from "react";
import axios from "axios";

const urlEndPoint = process.env.REACT_APP_BACKEND;

function UpdateData(){
    const [blogList, setBlogList] = useState([]);
  
    //load the blog items from the back end 
    useEffect(() => {
      axios.get(`${urlEndPoint}/blogs/all`)
      .then(function (response) {
        setBlogList(response.data);
      })
      .catch(function (error) {
        console.log(`Client Error Point 2: `+ error);
      })
    },[])
    return blogList
  }

  export default UpdateData
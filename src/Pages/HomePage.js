import { useEffect, useState } from "react";
import { useAuth } from "../Hooks/Auth";

const urlEndpoint = process.env.REACT_APP_BACKEND
const headerKey = process.env.REACT_APP_TOKEN_HEADER_KEY

//home page component 
const HomePage = () => {

    const [message, setMessage] = useState("")
	const auth = useAuth()
	console.log(auth);

    useEffect(()=>{

        
            const fetchMessage = async () => {
                const headers = {
                    "Content-Type": "application/json",
                }

                headers[process.env.REACT_APP_TOKEN_HEADER_KEY] = auth.userToken

                // console.log(headers)

                const response = await fetch(`${urlEndpoint}/users/message`, {
                    method: "GET",
                    headers: headers,
                });
                const responseJSON = await response.json();
                console.log(responseJSON)
                setMessage(responseJSON.message)
            }
            if (auth.userToken !== null) {
                fetchMessage()
            }
            if (auth.userToken === null) {
                setMessage("User Login Required")
		}
    
	}, [auth.userToken])



    return (
        <div>
            <h1>Welcome to Builders List </h1>
            <h2>Helping you find qualified builders and subcontractors near you!!</h2>
            <p>Message:  {message}</p>
        </div>
    )
}

export default HomePage
import { useState } from "react";
import { createBrowserRouter, RouterProvider, Routes, useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import store from "./redux/store";
import Layout from "./Layouts/Layout";
import HomePage from "./Pages/HomePage";
import EntryFormPage from "./Pages/EntryFormPage";
import EntryListPage from "./Pages/EntryListPage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import ProtectedRoute from "./Components/ProtectedRoutes";
import "./app.css";

function App() {
  const [userMessage, setUserMessage] = useState("");
  const auth = store.auth;
  // const navigate = useNavigate()

  // const ProtectedRoute = ({ children }) => {
  //   const SendToLogin = navigate('/login')
  //   {!auth? (<SendToLogin />):( children)}
  //   ;
  // };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/entry-form",
          element: 
          // <ProtectedRoute>
            <EntryFormPage /> 
          // </ProtectedRoute>  
        },
        {
          // index: true,
          path: "/list",
          element: <EntryListPage 
          />,
        },
        {
          path: "/login",
          element: <LoginPage 
          />,
        },
        {
          path: "/registration",
          element: <RegistrationPage 
          />,
        },
      ],
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
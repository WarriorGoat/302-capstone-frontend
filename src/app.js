import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layouts/Layout";
import HomePage from "./Pages/HomePage";
import EntryFormPage from "./Pages/EntryFormPage";
import EntryListPage from "./Pages/EntryListPage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import "./app.css";

// const urlEndPoint = process.env.REACT_APP_BACKEND;

function App() {
  const [userMessage, setUserMessage] = useState("");

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
          element: <EntryFormPage 
          // urlEndPoint={urlEndPoint} 
          />,
        },
        {
          // index: true,
          path: "/list",
          element: <EntryListPage 
          // urlEndPoint={urlEndPoint} 
          />,
        },
        {
          path: "/login",
          element: <LoginPage 
          // urlEndPoint={urlEndPoint}
          />,
        },
        {
          path: "/registration",
          element: <RegistrationPage 
          // urlEndPoint={urlEndPoint}
          />,
        },
      ],
    },
  ]);

  return (
    <div className="Header">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
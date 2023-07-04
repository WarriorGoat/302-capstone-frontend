import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./redux/store";
import Layout from "./Layouts/Layout";
import HomePage from "./Pages/HomePage";
import EntryFormPage from "./Pages/EntryFormPage";
import EntryListPage from "./Pages/EntryListPage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import BlogsPage from "./Pages/BlogsPage";
import RedirectPage from "./Pages/RedirectPage";
import "./app.css";

function App() {
  const auth = store.auth; //for future auth restrictions

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
          element: <EntryFormPage />,
        },
        {
          path: "/list",
          element: <EntryListPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/registration",
          element: <RegistrationPage />,
        },
        {
          path: "/update-user",
          element: <RegistrationPage />,
        },
        {
          path: "/blogs",
          element: <BlogsPage />,
        },
        {
          path: "/redirect",
          element: <RedirectPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

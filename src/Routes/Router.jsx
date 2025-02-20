
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Homepage/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Shared Components/Login";
import Register from "../Shared Components/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: <div className="pt-20 mb-[800px]">Contact</div>,
      },
    ]
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Homepage/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Shared Components/Login";
import Register from "../Shared Components/Register";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import Manage from "../Pages/Dashboard/Student-Dashboard/ManageNote";
import ManageNote from "../Pages/Dashboard/Student-Dashboard/ManageNote";
import CreateNote from "../Pages/Dashboard/Student-Dashboard/CreateNote";

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
        element: (
          <PrivateRoute>
            <div className="pt-20 mb-[800px]">Contact</div>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/create-note",
        element: <CreateNote></CreateNote>,
      },
      {
        path: "/dashboard/manage-note",
        element: <ManageNote></ManageNote>,
      },
    ],
  },
]);

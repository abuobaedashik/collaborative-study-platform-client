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
import AllUser from "../Pages/Dashboard/Admin-Dashboard/AllUser";
import NoteDetails from "../Pages/Dashboard/Student-Dashboard/NoteDetails";
import UpdateNote from "../Pages/Dashboard/Student-Dashboard/UpdateNote";
import CreateSession from "../Pages/Dashboard/Tutor-Dashboard/CreateSession";
import ViewAllSession from "../Pages/Dashboard/Tutor-Dashboard/ViewAllSession";
import UploadMaterials from "../Pages/Dashboard/Tutor-Dashboard/UploadMaterials";
import ViewAllStudySession from "../Pages/Dashboard/Admin-Dashboard/ViewAllStudySession";
import UpdateSession from "../Pages/Dashboard/Admin-Dashboard/UpdateSession";
import { useContext } from "react";
import { AuthContext } from "../Provider/Auth/Authprovider";
import UploadWithSecDtls from "../Pages/Dashboard/Tutor-Dashboard/UploadWithSecDtls";



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
        path: "/contact-info",
        element: (
          <div className="pt-44">contact information</div>
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
      // admin routes
      {
        path: "/dashboard/alluser",
        element:<AllUser></AllUser>,
      },
      {
        path: "/dashboard/updatesession/:id",
        element: <UpdateSession></UpdateSession>,
        loader: ({ params }) =>
          fetch(`https://collaborative-study-platform-server-one.vercel.app/session/${params.id}`),
      },
      {
        path: "/dashboard/view-all-session",
        element:<ViewAllStudySession></ViewAllStudySession>,
      },
      // student route
      {
        path: "/dashboard/manage-note/notedetails/:id",
        element: <NoteDetails />,
        loader: async ({ params }) => {
          const res = await fetch(`https://collaborative-study-platform-server-one.vercel.app/note/${params.id}`);
          return res.json();
        }
      },
      {
        path: "/dashboard/updatenote/:id",
        element: <UpdateNote></UpdateNote>,
        loader: ({ params }) =>
          fetch(`https://collaborative-study-platform-server-one.vercel.app/note/${params.id}`),
      },
      // tutor route
      {
        path: "/dashboard/create-session",
        element: <CreateSession></CreateSession>,
      },
      {
        path: "/dashboard/upload/:id",
        element: <UploadWithSecDtls></UploadWithSecDtls>,
        loader: ({ params }) =>
          fetch(`https://collaborative-study-platform-server-one.vercel.app/secDtlsUpload/${params.id}`),
      },
      {
        path: "/dashboard/View-all-sessions",
        element: <ViewAllSession></ViewAllSession>,
      },
      {
        path: "/dashboard/upload-materials",
        element: <UploadMaterials></UploadMaterials>,
      },

    ],
  },
]);

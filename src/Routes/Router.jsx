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
import ViewMaterials from "../Pages/Dashboard/Tutor-Dashboard/ViewMaterials";
import UpdatedMaterials from "../Pages/Dashboard/Tutor-Dashboard/UpdatedMaterials";
import ViewAllMaterials from "../Pages/Dashboard/Admin-Dashboard/ViewAllMaterials";
import SessionDetails from "../Pages/Homepage/SessionDetails";
import Payment from "../Pages/Homepage/PAyment";
import ViewBookedSession from "../Pages/Dashboard/Student-Dashboard/ViewBookedSession";
import AllMaterialsByAdmin from "../Pages/Dashboard/Student-Dashboard/AllMaterialsByAdmin";
import StudentHome from "../Pages/Dashboard/Student-Dashboard/StudentHome";
import CategoriesSession from "../Pages/Dashboard/Student-Dashboard/CategoriesSession";
import Contact from "../Pages/Contact";



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
        path: "/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`https://collaborative-study-platform-server-one.vercel.app/sessionDetails/${params.id}`),
      },
      {
        path: "/sesssionDetails/:id",
        element:<PrivateRoute><SessionDetails></SessionDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://collaborative-study-platform-server-one.vercel.app/sessionDetails/${params.id}`),
      },
      {
        path: "/contact-info",
        element: (
          <Contact></Contact>
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
      {
        path: "/dashboard/view-all-metarials",
        element:<ViewAllMaterials></ViewAllMaterials>
      },


     

      // student route
      {
        path: "/dashboard/student/view-provided-materials",
        element:<AllMaterialsByAdmin></AllMaterialsByAdmin>
      },
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
      {
        path: "/dashboard/create-note",
        element: <CreateNote></CreateNote>,
      },
      {
        path: "/dashboard/ViewBookedSession",
        element: <ViewBookedSession></ViewBookedSession>
      },
      {
        path: "/dashboard/ViewAllMaterials",
        element:<ViewAllMaterials></ViewAllMaterials>
      },
      {
        path: "/dashboard/manage-note",
        element: <ManageNote></ManageNote>,
      },
      {
        path: "/dashboard/sessionDtils/:id",
        element: <CategoriesSession></CategoriesSession>,
        loader: ({ params }) =>
          fetch(`https://collaborative-study-platform-server-one.vercel.app/sessionDtils/${params.id}`),
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
      {
        path: "/dashboard/view-all-materials",
        element: <ViewMaterials></ViewMaterials>,
      },
      {
        path: "/dashboard/updatematerials/:id",
        element: <UpdatedMaterials></UpdatedMaterials>,
        loader: ({ params }) =>
          fetch(`https://collaborative-study-platform-server-one.vercel.app/material/updateSingle/${params.id}`),
      },

    ],
  },
]);

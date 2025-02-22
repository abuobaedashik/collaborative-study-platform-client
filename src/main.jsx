import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router.jsx";
import AuthProvider from "./Provider/Auth/Authprovider.jsx";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <div className="max-w-[1920px] mx-auto ">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </StrictMode>
);

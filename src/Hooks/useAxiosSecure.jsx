import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Auth/Authprovider";
// import { AuthContext } from "../Provider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: "http://localhost:4000",
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { SignOut } = useContext(AuthContext);

    useEffect(() => {
        // Request Interceptor (Only once)
        const requestInterceptor = axiosSecure.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem("access-token");
                if (token) {
                    config.headers.authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        // Response Interceptor (Only once)
        const responseInterceptor = axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await SignOut();
                    navigate("/login", { replace: true });
                }
                return Promise.reject(error);
            }
        );

        // Cleanup Interceptors (Avoid multiple registrations)
        return () => {
            axiosSecure.interceptors.request.eject(requestInterceptor);
            axiosSecure.interceptors.response.eject(responseInterceptor);
        };
    }, [navigate, SignOut]);

    return axiosSecure;
};

export default useAxiosSecure;

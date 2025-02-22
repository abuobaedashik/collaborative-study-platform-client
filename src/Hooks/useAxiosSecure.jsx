import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Auth/Authprovider";

const axiosSecure = axios.create({
    baseURL: "http://localhost:4000",
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { SignOut } = useContext(AuthContext);

    useEffect(() => {
        // Request Interceptor
        const requestInterceptor = axiosSecure.interceptors.request.use(
            (config) => {
                const token = localStorage.getItem("access-token");
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        // Response Interceptor
        const responseInterceptor = axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    try {
                        await SignOut();
                        navigate("/login", { replace: true });
                    } catch (err) {
                        console.error("SignOut failed:", err);
                    }
                }
                return Promise.reject(error);
            }
        );

        // Cleanup function to prevent duplicate interceptors
        return () => {
            axiosSecure.interceptors.request.eject(requestInterceptor);
            axiosSecure.interceptors.response.eject(responseInterceptor);
        };
    }, [navigate, SignOut]);

    return axiosSecure;
};

export default useAxiosSecure;

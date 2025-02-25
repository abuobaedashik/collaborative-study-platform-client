import axios from "axios";

const axiosPublic =axios.create({
    baseURL:'https://collaborative-study-platform-server-one.vercel.app'
}) 

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
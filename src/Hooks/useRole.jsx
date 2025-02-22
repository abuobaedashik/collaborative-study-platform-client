import { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../Provider/Auth/Authprovider";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../Provider/Auth/Authprovider";


const useUserRole = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axiosPublic.get(`/user/role/${user?.email}`)
        .then((res) => {
          setRole(res.data.role);
          console.log(res.data.role)
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch role:", err);
          setLoading(false);
        });
    }
  }, [user, axiosPublic]);

  return { role, loading };
};

export default useUserRole;

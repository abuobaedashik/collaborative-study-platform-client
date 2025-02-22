import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
// import app from "../Firebase/Firebase.config";
// import useAxiosPublic from "../Hooks/useAxiosPublic";

const auth = getAuth(app);
export const AuthContext = createContext(null);
// const axiosPublic = useAxiosPublic();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  // User Create
  const CreateUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // User Login
  const LogInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update Profile
  const UpdateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //  Google SignIn
  const googleSignIn = () => {
    setLoader(true); // Loader Handle
    return signInWithPopup(auth, googleProvider);
  };

  //  Logout
  const SignOut = () => {
    setLoader(true);
    return signOut(auth).then(() => {
      localStorage.removeItem("access-token"); // ✅ Logout হলে Token Remove করা
    });
  };

  // Context API Data
  const authInfo = {
    user,
    CreateUser,
    LogInUser,
    googleSignIn,
    SignOut,
    loader,
    UpdateUser,
  };

  //  Firebase Authentication Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      console.log("User State Changed:", currentUser);

    //   if (currentUser) {
    //     try {
    //       // Token Request
    //       const userInfo = { email: currentUser.email };
    //       const res = await axiosPublic.post("/jwt", userInfo);

          
    //       if (res.data.token) {
    //         localStorage.setItem("access-token", res.data.token);
    //       } else {
    //         console.error("No Token Received from Backend");
    //       }
    //     } catch (error) {
    //       console.error("Token Fetch Error:", error);
    //     }
    //   } else {
    //     localStorage.removeItem("access-token"); 
    //   }

      setLoader(false); 
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

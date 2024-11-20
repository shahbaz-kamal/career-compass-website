import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // *Declaring states
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // * google Sign In Handler
  const googleProvider = new GoogleAuthProvider();
  const googleSignInUser = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   *signOutHandler

  const signOutUser = () => {
    signOut(auth);
  };

  // *register using Email & Password

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // *Login With Email & Password
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   *updating display Name & photoURL with manageProfileUser

  const manageProfileUser = async (name, photo) => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
      setUser({
        ...auth.currentUser,
        displayName: name,
        photoURL: photo,
      });
      setLoading(false);
    } catch (err) {
      toast.warn("Error updating Profile", err);
      throw err;
    }
  };

  //   *OnAuthStateChangeHandler
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
      console.log(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    loading,
    user,
    setUser,
    googleSignInUser,
    signOutUser,
    loginUser,
    registerUser,
    manageProfileUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

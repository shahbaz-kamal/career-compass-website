import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import Loading from "../Components/Loading";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const showToast = useRef;
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  if (!(user && user.email)) {
    return (
      <Navigate
        state={{
          from: location.pathname,
          toastToBeShown: true,
          toastMessage: "You need to log in to access this webpage",
        }}
        to={"/log-in"}
      ></Navigate>
    );
  }

  return children;
};

export default PrivateRoute;

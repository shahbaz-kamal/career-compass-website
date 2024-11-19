import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home";
import AllServices from "../Pages/AllServices";
import SuccessStories from "../Pages/SuccessStories";
import Events from "../Pages/Events";
import Profile from "../Pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-services",
        element: <AllServices></AllServices>,
      },
      {
        path: "/success-stories",
        element: <SuccessStories></SuccessStories>,
      },
      {
        path: "/events-and-workshops",
        element: <Events></Events>,
      },
      {
        path: "/my-profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);
export default router;

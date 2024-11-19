import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home";
import AllServices from "../Pages/AllServices";
import SuccessStories from "../Pages/SuccessStories";
import Events from "../Pages/Events";
import Profile from "../Pages/Profile";
import Error from "../Components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const sliderRes = await fetch("/slider.json");
          const sliderData = await sliderRes.json();
          const servicesDataRes = await fetch("/services.json");
          const servicesData = await servicesDataRes.json();
          return { sliderData, servicesData };
        },
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

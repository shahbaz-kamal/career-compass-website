import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home";
import AllServices from "../Pages/AllServices";
import SuccessStories from "../Pages/SuccessStories";
import Events from "../Pages/Events";
import Profile from "../Pages/Profile";
import Error from "../Components/Error";
import Details from "../Pages/Details";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import ForgetPassword from "../Pages/ForgetPassword";

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
          const achievmentsDataRes = await fetch("achievments.json");
          const achievmentsData = await achievmentsDataRes.json();
          return { sliderData, servicesData, achievmentsData };
        },
      },
      {
        path: "/all-services",
        element: <AllServices></AllServices>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/success-stories",
        element: <SuccessStories></SuccessStories>,
        loader: () => fetch("/success.json"),
      },
      {
        path: "/events-and-workshops",
        element: (
          <PrivateRoute>
            <Events></Events>
          </PrivateRoute>
        ),
        loader: () => fetch("/events.json"),
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/log-in",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const servicesDataRes = await fetch("/services.json");
          const servicesData = await servicesDataRes.json();
          const filteredData = servicesData.find(
            (data) => data.id === Number(params.id)
          );
          return { filteredData };
        },
      },
    ],
  },
]);
export default router;

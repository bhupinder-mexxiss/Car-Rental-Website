import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import ContactUS from "./Pages/ContactUS/ContactUS";
import AboutUs from "./Pages/AboutUs/AboutUs";
import CarList from "./Pages/CarList/CarList";
import AddCar from "./Pages/AddCar/AddCar";
import CarDetails from "./Pages/CarDetails/CarDetails";
import MyListings from "./Pages/MyListings/MyListings";
import Account from "./Pages/Account/Account";
import Profile from "./Pages/Profile/Profile";
import MyBookings from "./Pages/MyBookings/MyBookings";
import Favorities from "./Pages/Favorities/Favorities";
import Register from "./Pages/Auth/Register";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import VerifyOtp from "./Pages/Auth/verifyOtp";
import ResetPassword from "./Pages/Auth/ResetPassword";
import { Toaster } from "sonner";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/rent-car",
          element: <CarList />,
        },
        {
          path: "/buy-car",
          element: <CarList />,
        },
        {
          path: "/add-car",
          element: <AddCar />,
        },
        {
          path: "/car/:id",
          element: <CarDetails />,
        },
        {
          path: "/contact-us",
          element: <ContactUS />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "/my-listings",
          element: <MyListings />,
        },
        {
          path: "/account",
          element: <Account />,
          children: [
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "my-bookings",
              element: <MyBookings />,
            },
            {
              path: "favorites",
              element: <Favorities />,
            },
          ]
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/otp-verify",
      element: <VerifyOtp />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
  ]);
  return (
    <>
      <Toaster position="bottom-right" richColors theme="light" />
      <RouterProvider router={router} />
    </>
  )
}

export default App
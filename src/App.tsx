import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login.tsx";
import ContactUS from "./Pages/ContactUS/ContactUS.tsx";
import AboutUs from "./Pages/AboutUs/AboutUs.tsx";
import CarList from "./Pages/CarList/CarList.tsx";
import AddCar from "./Pages/AddCar/AddCar.tsx";
import CarDetails from "./Pages/CarDetails/CarDetails.tsx";
import Register from "./Pages/Auth/Register.tsx";
import ForgotPassword from "./Pages/Auth/ForgotPassword.tsx";
import VerifyOtp from "./Pages/Auth/verifyOtp.tsx";
import ResetPassword from "./Pages/Auth/ResetPassword.tsx";
import GoToTop from "./components/GoToTop/GoToTop.tsx";
import { Toaster } from "./components/ui/sonner-toast.tsx";

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
          path: "/car-list",
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
      <GoToTop />
    </>
  )
}

export default App
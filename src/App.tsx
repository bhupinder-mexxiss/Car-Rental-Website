import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import ContactUS from "./Pages/ContactUS/ContactUS";
import AboutUs from "./Pages/AboutUs/AboutUs";
import CarList from "./Pages/CarList/CarList";
import AddCar from "./Pages/AddCar/AddCar";
import CarDetails from "./Pages/CarDetails/CarDetails";
import Register from "./Pages/Auth/Register";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import VerifyOtp from "./Pages/Auth/verifyOtp";
import ResetPassword from "./Pages/Auth/ResetPassword";
import { Toaster } from "sonner";
import { useGetMeQuery } from "./redux/api/user";
import { useEffect } from "react";
import { setUser } from "./redux/Slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const { data: user, isLoading, isSuccess } = useGetMeQuery({}, {
    skip: !isAuthenticated, // ✅ Only call if authenticated
  });

  useEffect(() => {
    if (!isLoading && isSuccess && user) {
      dispatch(setUser(user));
    }
  }, [user, isLoading, isSuccess, dispatch]);

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
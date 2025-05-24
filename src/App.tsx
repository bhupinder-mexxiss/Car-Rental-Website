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
import Register from "./Pages/Auth/Register";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import ResetPassword from "./Pages/Auth/ResetPassword";
import { Toaster } from "sonner";
import { ProtectedRoute, PublicRoute } from "./Components/Routes/Route.tsx";
import Loader from "./Components/Loader/Loader.tsx";
import { useAuthReady } from "./hooks/useAuth";

const App = () => {
  const { isLoading } = useAuthReady();

  if (isLoading) return <Loader />;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/rent-car", element: <CarList /> },
        { path: "/buy-car", element: <CarList /> },
        { path: "/car/:id", element: <CarDetails /> },
        { path: "/contact-us", element: <ContactUS /> },
        { path: "/about-us", element: <AboutUs /> },

        {
          element: <ProtectedRoute />,
          children: [
            { path: "/add-car", element: <AddCar /> },
            { path: "/my-listings", element: <MyListings /> },
          ],
        },
      ],
    },

    {
      element: <PublicRoute />,
      children: [
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "/forgot-password", element: <ForgotPassword /> },
        { path: "/reset-password", element: <ResetPassword /> },
      ],
    },
  ])
  return (
    <>
      <Toaster position="bottom-right" richColors theme="light" />
      <RouterProvider router={router} />
    </>
  )
}

export default App
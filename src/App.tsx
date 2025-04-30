import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login.tsx";
import ContactUS from "./Pages/ContactUS/ContactUS.tsx";
import AboutUs from "./Pages/AboutUs/AboutUs.tsx";
import CarList from "./Pages/CarList/CarList.tsx";
import CarDetails from "./Pages/CarDetails/CarDetails.tsx";
import GoToTop from "./Components/GoToTop/GoToTop";
import Register from "./Pages/Auth/Register.tsx";

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
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <GoToTop />
    </>
  )
}

export default App
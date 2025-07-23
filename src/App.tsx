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
import BuyEnquiries from "./Pages/BuyEnquiries/BuyEnquiries";
import BookingRequests from "./Pages/BookingRequests/BookingRequests";
import Account from "./Pages/Account/Account";
import Profile from "./Pages/Profile/Profile";
import MyBookings from "./Pages/MyBookings/MyBookings";
import Favorities from "./Pages/Favorities/Favorities";
import Partner from "./Pages/Partner/Partner";
import Register from "./Pages/Auth/Register";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import ResetPassword from "./Pages/Auth/ResetPassword";
import { Toaster } from "sonner";
import { PartnerRoutes, PublicRoute, UserRoute } from "./Components/Routes/Route.tsx";
import Loader from "./Components/Loader/Loader.tsx";
import { useAuthReady } from "./hooks/useAuth";
import { FilterProvider } from "./Context/FilterContext.tsx";

const App = () => {
  const { isLoading } = useAuthReady();

  if (isLoading) return <Loader />;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <FilterProvider><Layout /></FilterProvider>,
      children: [
        { path: "/", element: <Home /> },
        { path: "/rent-car", element: <CarList /> },
        { path: "/buy-car", element: <CarList /> },
        { path: "/car/:id", element: <CarDetails /> },
        { path: "/contact-us", element: <ContactUS /> },
        { path: "/about-us", element: <AboutUs /> },

        {
          element: <UserRoute />,
          children: [
            { path: "/partner", element: <Partner /> },
            { path: "/add-car", element: <AddCar /> },
          ],
        },
        {
          element: <UserRoute />,
          children: [
            {
              path: "/",
              element: <Account />,
              children: [
                { path: "profile", element: <Profile /> },
                { path: "my-bookings", element: <MyBookings /> },
                { path: "favorites", element: <Favorities /> },
                {
                  element: <PartnerRoutes />,
                  children: [
                    { path: "my-listings", element: <MyListings /> },
                  ]
                }
              ],
            },
            {
              element: <PartnerRoutes />,
              children: [
                { path: "buy-enquiries", element: <BuyEnquiries /> },
                { path: "booking-requests", element: <BookingRequests /> },
              ]
            }
          ]
        }
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
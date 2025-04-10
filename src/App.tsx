import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import GoToTop from "./Components/GoToTop/GoToTop";

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
      ],
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
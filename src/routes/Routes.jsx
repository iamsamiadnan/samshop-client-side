import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
            path: '/',
            element: <Home />,
            loader: () => fetch('http://localhost:5000/brands')
        },
        {
            path: '/addProduct',
            element: <AddProduct />,
            loader: () => fetch('http://localhost:5000/brands')
        }
      ]
    },
  ]);

export default router
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import Products from "../pages/Products";
import SingleProduct from "../pages/SingleProduct";

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
        },
        {
          path: '/products/:brand',
          element: <Products />,
          loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand}`)
        },
        {
          path: '/products/single/:id',
          element: <SingleProduct />,
          loader: ({params}) => fetch(`http://localhost:5000/products/single/${params.id}`)
        }
      ]
    },
  ]);

export default router
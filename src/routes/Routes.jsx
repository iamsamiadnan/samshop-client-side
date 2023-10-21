import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import Products from "../pages/Products";
import SingleProduct from "../pages/SingleProduct";
import UpdateProduct from "../pages/UpdateProduct";
import Cart from "../pages/Cart";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import PrivateRoutes from "./PrivateRoutes";



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
            element: <PrivateRoutes> <AddProduct /></PrivateRoutes>,
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
        },
        {
          path: '/cart',
          element: <PrivateRoutes><Cart /></PrivateRoutes>,
        },
        {
          path: '/updateProduct/:id',
          element: <UpdateProduct />,
          loader: ({params}) => fetch(`http://localhost:5000/products/single/${params.id}`)
        }
        ,
        {
          path: '/signup',
          element: <SignUp />
        },
        {
          path: '/signin',
          element: <SignIn />
        }
      ]
    },
  ]);

export default router
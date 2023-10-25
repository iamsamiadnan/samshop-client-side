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
import P404 from "../pages/P404";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
            path: '/',
            element: <Home />,
            loader: () => fetch('https://server-side-kcn8oes4s-adnan-samis-projects.vercel.app/brands')
        },
        {
            path: '/addProduct',
            element: <PrivateRoutes> <AddProduct /></PrivateRoutes>,
            loader: () => fetch('https://server-side-kcn8oes4s-adnan-samis-projects.vercel.app/brands')
        },
        {
          path: '/products/:brand',
          element: <Products />,
          loader: ({params}) => fetch(`https://server-side-kcn8oes4s-adnan-samis-projects.vercel.app/products/${params.brand}`)
        },
        {
          path: '/products/single/:id',
          element: <PrivateRoutes><SingleProduct /></PrivateRoutes>,
          loader: ({params}) => fetch(`https://server-side-kcn8oes4s-adnan-samis-projects.vercel.app/products/single/${params.id}`)
        },
        {
          path: '/cart',
          element: <PrivateRoutes><Cart /></PrivateRoutes>,
        },
        {
          path: '/updateProduct/:id',
          element: <PrivateRoutes><UpdateProduct /></PrivateRoutes>,
          loader: ({params}) => fetch(`https://server-side-kcn8oes4s-adnan-samis-projects.vercel.app/products/single/${params.id}`)
        }
        ,
        {
          path: '/signup',
          element: <SignUp />
        },
        {
          path: '/signin',
          element: <SignIn />
        },
        {
          path: '*',
          element: <P404 />
      }
      ]
    },
  ]);

export default router
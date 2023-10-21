import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import Products from "../pages/Products";
import SingleProduct from "../pages/SingleProduct";
import UpdateProduct from "../pages/UpdateProduct";
import Cart from "../pages/Cart";

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
        },
        {
          path: '/products/cart/1',
          element: <Cart />,
          loader: () => fetch(`http://localhost:5000/products/cart/1`)
        },
        {
          path: '/updateProduct/:id',
          element: <UpdateProduct />,
          loader: ({params}) => fetch(`http://localhost:5000/products/single/${params.id}`)
        }
      ]
    },
  ]);

export default router
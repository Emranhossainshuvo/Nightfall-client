import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Products from "../pages/Products/Products/Products";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/', 
            element: <Home></Home>
        }, 
        {
          path: 'products', 
          element:<Products></Products> 
        }
      ]
    },
  ]);
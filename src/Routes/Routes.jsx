import React from 'react';
import App from '../App';
import Home from '../components/pages/Home';
import Blog from '../components/pages/Blog';
import About from '../components/pages/About';
import Login from '../components/pages/Login';
import Registration from '../components/pages/Registration';
import ChefRecipes from '../components/pages/chefRecipes';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../components/pages/ErrorPage';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=> fetch('http://localhost:3000/chefsData')
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "registration",
          element: <Registration></Registration>,
        },
        {
            path: "recipes/:id",
            element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
            loader: ({params})=> fetch(`http://localhost:3000/recipes/${params.id}`)
        }
      ],
    },
  ]);

export default router;
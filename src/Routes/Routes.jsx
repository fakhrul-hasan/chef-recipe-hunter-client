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
import MyRecipes from '../components/pages/MyRecipes';
import RecipeSection from '../components/pages/RecipeSection';
import Profile from '../components/pages/Profile';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: ()=> fetch('https://chef-recipe-hunter-server-fakhrul-hasan.vercel.app/chefsData')
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
            loader: ({params})=> fetch(`https://chef-recipe-hunter-server-fakhrul-hasan.vercel.app/recipes/${params.id}`)
        },
        {
          path: '/myRecipes',
          element: <PrivateRoute><MyRecipes></MyRecipes></PrivateRoute>,
          loader: ()=> fetch('https://chef-recipe-hunter-server-fakhrul-hasan.vercel.app/recipes'),
        },
        {
          path: 'recipes',
          element: <RecipeSection></RecipeSection>,
          loader: ()=> fetch('https://chef-recipe-hunter-server-fakhrul-hasan.vercel.app/recipes')
        },
        {
          path: 'profile',
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        }
      ],
    },
  ]);

export default router;
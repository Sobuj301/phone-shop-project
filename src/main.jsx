import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/roots/Root';
import Home from './Pages/Home/Home';
import Favorites from './Pages/Favorites/Favorites';
import Login from './Pages/Login/Login';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import ViewPhone from './Components/ViewPhone/ViewPhone';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:() => fetch('/public/phones.json')
      },
      {
        path:'/favorites',
        element:<Favorites></Favorites>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
      path:'/phones/:id',
      element:<ViewPhone></ViewPhone>,
      loader:()=> fetch('/public/phones.json')

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

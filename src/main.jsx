// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import AuthProvider from './AuthProvider/AuthProvider';
import Orders from './Orders/Orders';
import PrivateRoute from './Route/PrivateRoute';
import Profile from './Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/profile",
        element: <Profile></Profile>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Registration></Registration>
      },
      {
        path: "orders",
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./components/Root";
import Error from "./components/Error";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import AuthProvider from "./provider/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import AllList from "./components/AllList";
import Add from "./components/Add";
import Update from "./components/Update";
import PrivateRoute from "./components/PrivateRoute";
import Detail from "./components/Detail";
import Mylist from "./components/Mylist";
import CountryDetails from "./components/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: () => fetch('https://b9a10-server-side-tahmid-tausif.vercel.app/touristSpot'), 
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/all",
        element: <AllList />,
        loader: () => fetch('https://b9a10-server-side-tahmid-tausif.vercel.app/touristSpot'),
      },
      {
        path: "/add",
        element:<PrivateRoute><Add /></PrivateRoute> 
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><Update /></PrivateRoute>,
        loader:  ({params}) => fetch(`https://b9a10-server-side-tahmid-tausif.vercel.app/touristSpot/${params.id}`),
      },
      {
        path: "/home/:id",
        element: <PrivateRoute><Detail /></PrivateRoute>,
        loader: () => fetch('https://b9a10-server-side-tahmid-tausif.vercel.app/touristSpot'),
      },
      {
        path: "/country/:name",
        element: <CountryDetails />,
        loader: () => fetch('https://b9a10-server-side-tahmid-tausif.vercel.app/touristSpot'),
      },
      {
        path: "/mylist",
        element: <PrivateRoute><Mylist /></PrivateRoute>,
        loader: () => fetch('https://b9a10-server-side-tahmid-tausif.vercel.app/touristSpot'),
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>

    </AuthProvider>
  </React.StrictMode>
);
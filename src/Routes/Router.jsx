import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../shared/Home/Home/Home";
import Login from "../Account/Login/Login";
import SignUp from "../Account/Signup/Signup";
import AllToys from "../Componets/AllToys/AllToys";
import MyToys from "../Componets/MyToys/MyToys";
import AddToys from "../Componets/AddToys/AddToys";
import PrivateRoutes from "../Private/PrivateRoutes";
import Blog from "../Componets/Blog/Blog";
import UpdateToys from "../Componets/UpdateToys/UpdateToys";
import ViewDetails from "../Componets/ViewDetails/ViewDetails";
import ErrorPage from "../Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch("https://toys-server-site-salauddin98.vercel.app/allToys"),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoutes>
            <MyToys></MyToys>
          </PrivateRoutes>
        ),
      },
      {
        path: "/AddToys",
        element: (
          <PrivateRoutes>
            <AddToys></AddToys>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateToys/:_id",
        element: (
          <PrivateRoutes>
            <UpdateToys></UpdateToys>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toys-server-site-salauddin98.vercel.app/myToys/${params._id}`
          ),
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoutes>
            {" "}
            <ViewDetails></ViewDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toys-server-site-salauddin98.vercel.app/allToys/${params.id}`
          ),
        // fetch(`https://toys-server-site-salauddin98.vercel.app/viewToys/${params.id}`),
      },

      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <SignUp></SignUp> },
    ],
  },
]);

export default router;

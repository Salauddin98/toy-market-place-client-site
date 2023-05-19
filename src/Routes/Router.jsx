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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/AllToys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/allToys"),
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
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <SignUp></SignUp> },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../shared/Home/Home/Home";
import Login from "../Account/Login/Login";
import SignUp from "../Account/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <SignUp></SignUp> },
    ],
  },
]);

export default router;

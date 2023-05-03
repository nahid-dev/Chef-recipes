import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import ChefDetails from "../Layouts/ChefDetails";
import LoginAndReg from "../Layouts/LoginAndReg";
import Login from "../Pages/LoginAndRegister/Login";
import Register from "../Pages/LoginAndRegister/Register";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <LoginAndReg></LoginAndReg>,
  //   children: [
  //     {
  //       path: "/",
  //       element: <Navigate to="/"></Navigate>,
  //     },
  //     {
  //       path: "login",
  //       element: <Login></Login>,
  //     },
  //   ],
  // },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/chefData"),
      },
    ],
  },
  {
    path: "chefData/:id",
    element: <ChefDetails></ChefDetails>,
    loader: ({ params }) =>
      fetch(`http://localhost:5000/chefData/${params.id}`),
  },
  {
    path: "login",
    element: <LoginAndReg></LoginAndReg>,
    children: [
      {
        path: "",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;

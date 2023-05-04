import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import ChefDetails from "../Layouts/ChefDetails";
import LoginAndReg from "../Layouts/LoginAndReg";
import Login from "../Pages/LoginAndRegister/Login";
import Register from "../Pages/LoginAndRegister/Register";
import ErrorPage from "../Pages/Errorpage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://ass-10-server-nahid-dev.vercel.app/chefData"),
      },
    ],
  },
  {
    path: "chefData/:id",
    errorElement: <ErrorPage></ErrorPage>,
    element: <ChefDetails></ChefDetails>,
    loader: ({ params }) =>
      fetch(`https://ass-10-server-nahid-dev.vercel.app/chefData/${params.id}`),
  },
  {
    path: "login",
    errorElement: <ErrorPage></ErrorPage>,
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

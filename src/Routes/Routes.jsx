import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import ChefDetails from "../Layouts/ChefDetails";

const router = createBrowserRouter([
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
]);

export default router;

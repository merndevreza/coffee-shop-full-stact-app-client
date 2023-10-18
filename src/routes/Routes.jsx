import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error404 from "../pages/Error404/Error404";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import Coffee from "../pages/Coffee/Coffee";
import Users from "../pages/Users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path: "/",
        loader:()=>fetch("https://full-stact-project-1-server-83z1rk3b3-rezaul-karims-projects.vercel.app/coffees"),
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/users",
        loader:()=>fetch("https://full-stact-project-1-server-83z1rk3b3-rezaul-karims-projects.vercel.app/users"),
        element: <Users></Users>
      },
      {
        path: "/coffee",
        element: <AddCoffee></AddCoffee>
      },
      {
        path: "/coffee/:id",
        loader:({params})=>fetch(`https://full-stact-project-1-server-83z1rk3b3-rezaul-karims-projects.vercel.app/coffees/${params.id}`),
        element: <Coffee></Coffee>
      },
    ],
  },
]);

export default router;

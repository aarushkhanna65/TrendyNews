import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Homepage from './homepage/homepage';
import Newspage from './newspage/newspage';
import Aboutus from './aboutus'
import Contactus from './contactus/contactus';
import Login from './login';
import CreateNews from "./CRUD/CreateNews";
import NotFound from "./404";

const Router = () =>{
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>
    },
    {
      path: "/news/:slug",
      element: <Newspage/>,
      errorElement: <NotFound/>
    },
    {
      path: "/aboutus",
      element: <Aboutus/>
    },
    {
      path: "/contactus",
      element: <Contactus/>
    },
    {
      path: "/admin",
      element: <Login/>
    },
    {
      path: "/edit/:id",
      element: <CreateNews/>
    },
    {
      path: '/createnews',
      element: <CreateNews/>
    },
    {
      path: "*",
      element: <NotFound/>
    }

  ]);
  return <RouterProvider router={router} />;
}

export default Router;

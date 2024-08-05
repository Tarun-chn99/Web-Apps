import Home from "./Home";
import Login from "./Login";
import Browse from "./Browse"
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const EscapeHut = () => {
  return (
    <div className="EscapeHut" dir='ltr' lang='en-IN' >
      <RouterProvider router={appRouter}/>
    </div>
  )
}

const lang = "in"
const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <Home lang={lang}/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  // { 
  //   path: '/:action',
  //   element: <Login/>
  // },
  {
    path: '/browse',
    element: <Browse/>
  }
]);

export default EscapeHut;

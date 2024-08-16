import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Body";
import Header from "./Header";
import MainContainer from "./MainContainer";
import WatchPage from './WatchPage'

const MyYoutube = () => {
  return (
    <div className='h-screen w-screen'>
        <Header/>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element : <Body/>,
    children: [
      {
        path: '/',
        element: <MainContainer/>
      },
      {
        path: '/watch',
        element: <WatchPage/>
      }
    ]
  }
]);

export default MyYoutube;

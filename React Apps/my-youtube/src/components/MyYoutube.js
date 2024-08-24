import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Body";
import Header from "./Header";
import MainContainer from "./HomePage Components/MainContainer";
import WatchPage from './WatchPage Components/WatchPage'

const MyYoutube = () => {
  return (
    <div className='h-screen w-screen'>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element : <>
                <Header />
                <Body />
              </>,
    children: [
      {
        path: '/',
        element: <MainContainer context='home'/>
      },
      {
        path: '/watch',
        element: <WatchPage />
      }
    ]
  }
]);

export default MyYoutube;

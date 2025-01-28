import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from 'react-redux';
import appStore from "./AppStore/appStore";
import Cart from "./components/Cart"
import Search from "./components/Search";
import Offers from "./components/Offers";
import Help from "./components/Help";

// const About = lazy(() => import("./components/About"));

const App = () => {
    return  (
        <Provider store={appStore}>
            <div name='app' className="w-full h-full overflow-hidden font-sans">
                <Header />
                <Outlet /> 
            </div>
        </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/search',
                element: <Search />
            },
            // {
            //     path: '/about',
            //     element: <Suspense fallback={<h1>Loading...</h1>}>
            //                 <About />
            //              </Suspense>
            // },
            {
                path: '/offers',
                element: <Offers />
            },
            {
                path: '/help',
                element: <Help />
            },
            {
                path: '/restaurantMenu/:id',
                element: <RestaurantMenu />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ]       
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

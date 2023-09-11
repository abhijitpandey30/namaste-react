import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet/>
  </div>
);

const Grocery = lazy(()=> import("./components/Grocery"));
const About  = lazy(()=> import("./components/About"));

const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/About',
        element:<Suspense fallback={<h1>Loading..</h1>}><About/></Suspense>
      },
      {
        path:'Contact',
        element:<Contact/>
      },
      {
        path:'Grocery',
        element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
      },
      {
        path:'restaurants/:resId',
        element: <RestaurantMenu/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter} />);

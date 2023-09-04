import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet/>
  </div>
);

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
        element:<About/>
      },
      {
        path:'Contact',
        element:<Contact/>
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

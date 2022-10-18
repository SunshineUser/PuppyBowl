// importing all of react as well as several components from different pages
import {useState, useEffect} from "react"
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import ReactDOM from "react-dom"

import HomePage from "./components/HomePage";
import NamePicture from "./components/NamePicture";
import ErrorPage from "./components/ErrorPage";
import Settings from "./components/Settings";
import AboutUs from "./components/AboutUs";
import AllPuppies from "./components/AllPuppies";

//setting the app element and attaching it to j


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,

        //children multidimension object array
        children: [
            {
                path: "/settings",
                element: <Settings /> 
            },
            {
                path: "/about",
                element: <AboutUs />
            },
            {
                path: "/puppies",
                element: <AllPuppies/>
            }
        ]
    }
])

ReactDOM.render(<RouterProvider router={router} />, document.getElementById("app"));
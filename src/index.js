import React, { lazy,Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Navbar from "./components/Navbar";
import Hero from "./components/Body";
import { createBrowserRouter ,RouterProvider ,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const App = () =>{
    const [userName,setUserName]=useState();
    
    useEffect(()=>{
       const data={
        name:"Rakesh Vanam",
       };
       setUserName(data.name);
    },[])

    return (
        <UserContext.Provider value={{loggedInUser:userName}}>
        <div className="app">
            <Navbar/>
            <Outlet/>
        </div>
        </UserContext.Provider>
    );
}

const Grocery = lazy(()=>import("./components/Grocery"))

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children:[
            {
                path: "/",
                element:<Hero/>
            },
            {
                path: "/about",
                element:<About/>
            },
            {
                path: "/contact",
                element:<Contact/>
            },
            {
                path: "/restaurants/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading....</h1>}>
                <Grocery/>
                </Suspense>
            }
        ],
        errorElement:<Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
/**
 *  Navbar
 *    -logo
 *    -Menu items
 *    -icon 
 *  Hero 
 *    -search
 *    //-TopRestaurant
 *    -Resto Cards
 * Footer
 *    -details
 */


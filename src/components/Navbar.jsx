import { useState } from "react";
import logo from "../../assets/logo.png";
import { nav_Icon } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Navbar = ()=>{
    const [loginBtn, setLoginBtn]= useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex items-center justify-between p-3 bg-slate-700">
            <div className="flex items-center gap-3">
                <img src={logo} alt="" className="w-14 h-14 rounded-full" />
                <h1 className="text-white text-2xl font-bold ">AHARAM</h1>
            </div>
            <div className="">
                <ul className="flex gap-5 text-white font-semibold text-lg">
                    <li>Online:{onlineStatus ? "🟢" : "🔴"}</li>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About Us</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <button className="" onClick={()=>{
                        loginBtn === "login" ?   setLoginBtn("Login") : setLoginBtn("Logout");
                    }}>{loginBtn}</button>
                </ul>
            </div>
            <div className="">
                <img src={nav_Icon} alt="" className="w-14 h-14 rounded-full" />
            </div>
        </div>
    )
}

export default Navbar;
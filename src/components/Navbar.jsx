import { useState } from "react";
import logo from "../../assets/logo.png";
import { nav_Icon } from "../utils/constants";
import { Link } from "react-router-dom";

const Navbar = ()=>{
    const [loginBtn, setLoginBtn]= useState("Login");
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" className="logo-img" />
                <h1>AHARAM</h1>
            </div>
            <div className="menu-items">
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About Us</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        loginBtn === "login" ?   setLoginBtn("Login") : setLoginBtn("Logout");
                    }}>{loginBtn}</button>
                </ul>
            </div>
            <div className="nav-icon">
                <img src={nav_Icon} alt="" className="icon-img" />
            </div>
        </div>
    )
}

export default Navbar;
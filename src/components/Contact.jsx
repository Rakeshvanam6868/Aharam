import React from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact=()=>{
    const {loggedInUser}=useContext(UserContext);  
    return (
        <div className="contact">
            <h1>Here Rakesh Vanam</h1>
            <h2>{loggedInUser}</h2>
        </div>
    );
}
export default Contact;
import React from "react";
import { useState } from "react";

const User=({name})=>{
    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(1);
    return(
        <div className="">
            <h1>Name: {name}</h1>
            <p>Count:{count}</p>
            <p>Count:{count2}</p>
            <h2>Frontend Developer</h2>
            <h3>SR University</h3>
        </div>
    );
}

export default User;
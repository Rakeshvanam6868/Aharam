import { useEffect, useState } from "react";
import { MenuItems } from "./constants"

const useRestaurantMenu = (resId)=>{
    const [resInfo, setResInfo]= useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        const menu =await fetch(MenuItems+resId);
        const data = await menu.json();
        setResInfo(data.data);
    }
    return resInfo;
}

export default useRestaurantMenu;
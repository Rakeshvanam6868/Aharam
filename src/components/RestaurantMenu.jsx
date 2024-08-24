import { useEffect, useState } from "react";
import { MenuItems } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu = ()=>{
    const [resInfo,setResInfo]=useState(null);
    const {resId} = useParams();
    useEffect(()=>{
        fetchMenu();
    },[])
    //302421
    const fetchMenu = async ()=>{
        const menu = await fetch(MenuItems+resId);
        const data =await menu.json();
        console.log(data);
        setResInfo(data.data);
    };

    if(resInfo === null){
        return <Shimmer/>;
    }

    const {name,costForTwoMessage,avgRating,cuisines} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);
    return(
        <div className="">
            <h1>{name}</h1>
            <h2>{avgRating}</h2>
            <h3>{cuisines}</h3>
            <h4>{costForTwoMessage}</h4>
            <h1>Menu</h1>
            <ul>
                {itemCards.map((item,index)=><li key={index}>{item.card.info.name}-{item.card.info.price/100}</li>)}
            </ul>
        </div>
    );
}

export default RestaurantMenu;
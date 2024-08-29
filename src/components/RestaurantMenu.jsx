import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import ItemCategory from "./ItemCategory";
import { useParams } from "react-router-dom";
import React, { useState } from 'react';


const RestaurantMenu = ()=>{
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex,setShowIndex]=useState(null);

    if(resInfo === null){
        return <Shimmer/>;
    }

    const {name,costForTwoMessage,avgRating,cuisines} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const itemCategory = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.card?.["@type"]===  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(itemCategory);
    return(
        <div className="w-6/12 m-auto flex items-center flex-col gap-3">
            <h1 className="text-black font-bold text-3xl mt-2">{name}</h1>
            <h3 className="font-bold text-lg">{cuisines.join(", ")}{" - "}<span className="font-normal">{costForTwoMessage}</span></h3>
            {itemCategory.map((category,index)=><ItemCategory key={category?.card?.card.title} data={category?.card?.card} showItems={index===showIndex && true} setShowIndex={()=>setShowIndex(index)}/>)}
        </div>
    );
}

export default RestaurantMenu;
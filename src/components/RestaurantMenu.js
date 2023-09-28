import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RESTAURANT_MENU_URL } from "../utils/constants";
import resList from "../utils/mock-data";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = ()=>{
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex]= useState(null);

    const setActiveIndex = (index)=>{
        if(index === showIndex) {
            setShowIndex(null)
        } else{
            setShowIndex(index)
        }
    }
    
    if(resInfo === null) return <Shimmer/>
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=> c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    //console.log(categories);
    return resInfo=== null? <Shimmer/> : (
        <div className="text-center ">
            <h1 className="font-bold m-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(",")}- {costForTwoMessage}
            </p>
            {categories.map((c,index)=> <RestaurantCategory 
            showItems={index === showIndex ? true: false}
            // showItems={true && index=== 0} 
            setShowIndex={()=> setActiveIndex(index)}
            key={c.card?.card?.title} 
            data={c?.card?.card}/>)}
        </div>
    )
}

export default RestaurantMenu;
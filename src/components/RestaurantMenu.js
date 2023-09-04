import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RESTAURANT_MENU_URL } from "../utils/constants";
import resList from "../utils/mock-data";
import Shimmer from "./Shimmer";

const RestaurantMenu = ()=>{

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    }, []);

    const {resId} = useParams();

    const fetchMenu = async ()=>{
        const data = await fetch(`${RESTAURANT_MENU_URL}${resId}`)
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
        
    }
    if(resInfo === null) return <Shimmer/>
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
    console.log(itemCards);
    return resInfo=== null? <Shimmer/> : (
        <div className="Menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(",")}- {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((res)=> <li key={res?.card?.info?.id}>{res?.card?.info?.name} Rs.{res?.card?.info?.price/100 || res?.card?.info?.defaultPrice/100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;
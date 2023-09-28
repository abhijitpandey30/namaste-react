
import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  const RestaurantCard = (props) => {
    // const { resData:{info:{name, cuisines, avgRating, sla:{slaString}, cloudinaryImageId}} } = props;
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      sla:{slaString}
    } = resData;
    //console.log(resData)
    const {loggedInUser} = useContext(UserContext)
    return (
      <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
        <img
          className="rounded-lg"
          src={`${CDN_URL}/${cloudinaryImageId}`}
          alt="res-img"
        ></img>
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{slaString}</h4>
        <h4 className="font-bold">{loggedInUser}</h4>
      </div>
    );
  };

  export const withVegNonVegLabelRestaurantCard = (RestaurantCard)=>{
    return (props)=>{
      return (
        <div>
          <label className="absolute bg-black text-green-300 m-2 p-2 rounded-lg">Vegetarian</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }

  export default RestaurantCard;
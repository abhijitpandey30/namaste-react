
import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  const RestaurantCard = (props) => {
    const { resData:{info:{name, cuisines, avgRating, sla:{slaString}, cloudinaryImageId}} } = props;
    // console.log(resData);
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
        <img
          className="rounded-lg"
          src={`${CDN_URL}/${cloudinaryImageId}`}
          alt="res-img"
        ></img>
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{slaString}</h4>
      </div>
    );
  };

  export default RestaurantCard;
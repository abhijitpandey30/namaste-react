import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

import resList from "../utils/mock-data";
const Body = () => {
  //let listOfRestaurants = structuredClone(resList);
  const [listOfRestaurants, setListOfRestaurants] = useState(structuredClone(resList));
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurants(filteredList)
              /*
            listOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(listOfRestaurants) // this print correct data, but will not update UI, u need hooks
            */
          }}
        >
          To rated restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

import resList from "../utils/mock-data";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(
    []
  );
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("")
  useEffect(() => {
    console.log("use effect called => after body rendered")
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5989691&lng=73.7952368&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json)
    setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  //console.log("before Body rendered")

  // if(listOfRestaurants.length === 0) return <Shimmer/>
  
  return listOfRestaurants?.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
      <div className="search">
          <input onChange={(e)=>{
            setSearchText(e.target.value)
          }} className="search-box" value={searchText}/> 
          <button onClick={()=>{
            console.log(searchText);
            const filteredList = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredListOfRestaurants(filteredList);
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredListOfRestaurants(filteredList);
          }}
        >
          To rated restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRestaurants?.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;

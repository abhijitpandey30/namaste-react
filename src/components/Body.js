import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import resList from "../utils/mock-data";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(
    []
  );
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  
  useEffect(() => {
    console.log("use effect called  from body=> after body rendered")
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
  
  const [searchText, setSearchText] = useState("")
  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return (
    <h1>Looks like you are online..! Plase check your internet connection</h1>
  )

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
          <Link key={res.info.id} to={`/restaurants/${res.info.id}`}><RestaurantCard  resData={res} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

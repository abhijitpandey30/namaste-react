import RestaurantCard, {withVegNonVegLabelRestaurantCard} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import resList from "../utils/mock-data";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );

  useEffect(() => {
    console.log("use effect called  from body=> after body rendered");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5989691&lng=73.7952368&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();


  const { setUserName, loggedInUser } = useContext(UserContext);
  const RestaurantCardVegNonVeg = withVegNonVegLabelRestaurantCard(RestaurantCard);

  if (onlineStatus === false)
    return (
      <h1>Looks like you are online..! Plase check your internet connection</h1>
    );

  //console.log("before Body rendered")

  // if(listOfRestaurants.length === 0) return <Shimmer/>

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="border border-solid border-black"
            value={searchText}
          />
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              console.log(searchText);
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        
        <div className="flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
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
        <div className="flex items-center px-4">
          <label className="pr-2">User:

          </label>
          <input value={loggedInUser} onChange={(e)=> setUserName(e.target.value)} className="border border-black p-2"/>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredListOfRestaurants?.map((res) => (
          <Link key={res.info.id} to={`/restaurants/${res.info.id}`}>
              {res.info.veg ? <RestaurantCardVegNonVeg resData={res}/> : <RestaurantCard resData={res} />}
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

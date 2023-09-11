import { useState, useEffect  } from "react";

const useListOfRestaurants = ()=> {
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
        setFilteredListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      };
      return [listOfRestaurants, filteredListOfRestaurants];
}

export default useListOfRestaurants;
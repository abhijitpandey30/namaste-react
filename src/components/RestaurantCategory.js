import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //console.log(data);
  /*
  const [showItems, setShowItems] = useState(false)
  */
  const handleClick = ()=>{
    //setShowItems(!showItems);
    setShowIndex();
  }
  
  return (
    <div className="w-6/12 my-6 m-auto bg-gray-50 shadow-lg p-4 ">
      {/* Header */}
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">
          {data.title} ({data?.itemCards?.length})
        </span>
        <span>⬇️</span>
      </div>

      {/* Body */}
      {showItems && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;


import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
let btnName="Login";
const [btnNameReact, setBtnNameReact] = useState("Login")
const onlineStatus = useOnlineStatus();
useEffect(()=>{
  console.log("useEffect called from header")
}), [btnNameReact]

const {loggedInUser} = useContext(UserContext);

// Store

const cartItems = useSelector((store)=> store.cart.items);

return (

    <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-green-100 lg:bg-pink-100">
      <div className="logo-container">
        <img
          className="w-56"
          src={LOGO_URL}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? '✅': '❌'}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About</Link></li>
          <li className="px-4"><Link to="/about">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 font-bold text-xl"><Link to="/cart">Cart {cartItems.length} items</Link></li>
          {/* <button className="login" onClick={()=> {
            btnName =  'Logout';
            console.log(btnName)
          }}>{btnName}</button> */}
          <button className="login" onClick={()=> {
            btnNameReact === "Login"? setBtnNameReact("Logout") : setBtnNameReact("Login")
          }}>{btnNameReact}</button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
}

  export default Header;

import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
let btnName="Login";
const [btnNameReact, setBtnNameReact] = useState("Login")
const onlineStatus = useOnlineStatus();
useEffect(()=>{
  console.log("useEffect called from header")
}), [btnNameReact]

return (

    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? '✅': '❌'}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/about">Contact Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Cart</li>
          {/* <button className="login" onClick={()=> {
            btnName =  'Logout';
            console.log(btnName)
          }}>{btnName}</button> */}
          <button className="login" onClick={()=> {
            btnNameReact === "Login"? setBtnNameReact("Logout") : setBtnNameReact("Login")
          }}>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
}

  export default Header;
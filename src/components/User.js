import { useState } from "react";

const User = ({name})=>{
    const [count1] = useState(1);
    const [count2] = useState(2);
    return (
        <div className="user-card">
            <h2>Count 1: {count1}</h2>
            <h2>Count 2 : {count2}</h2>
            <h2>Name: {name}</h2>
            <h3>Location: </h3>
            <h4>Contact: </h4>
        </div>
    )
}

export default User; 
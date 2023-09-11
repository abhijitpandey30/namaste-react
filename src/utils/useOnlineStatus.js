import { useState, useEffect } from "react";

const useOnlineStatus = ()=>{

    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(()=>{
        addEventListener("online", ()=>{ // same as window.addEventListenr
            setOnlineStatus(true);
        })

       addEventListener("offline", ()=>{
           setOnlineStatus(false)
       })
    },[]) // Use effect with empty array bcoz we want to register the event once
    
    return onlineStatus;
}

export default useOnlineStatus;
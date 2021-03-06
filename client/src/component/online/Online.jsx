import "./online.css";
import React,{useState,useEffect} from "react";
import axios from "axios";
import OnlineName from "./OnlineName";

export default function Online({userID,getConv}) {

  const [user, setUser] = useState([]);
  const getval=async()=>{
    let res=await axios.get(`http://localhost:8000/myprofile/${userID}`);
     
      // console.log(res.data)
   
    setUser(res.data);
  }
  useEffect(() => {
    getval()
  }, [])
  // console.log(userId)
  return (
    <OnlineName
    profilePicture={user.profilePicture}
    userID={user.userID}
    getConv={getConv}
    
    />
  );
}
 
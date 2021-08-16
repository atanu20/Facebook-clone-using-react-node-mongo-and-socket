import React,{ useEffect,useState} from 'react'

import axios from 'axios'

const CenterName = ({profilePicture,userID}) => {
    const [pname, setPname] = useState("")
    const getmyidname=async()=>{
        let res=await axios.get(`http://localhost:8000/myname/${userID}`);
        // console.log(res.data)
        setPname(res.data.name)
      }
      useEffect(() => {
        if(userID)
        {
            getmyidname()
        }
        
    }, [userID])
    return (
        <>
            <div className="centeritems">
           <img src={profilePicture ? `../profile/${profilePicture}` : `../assets/pro.png`} alt="" className="centeritemsimg" />  <p className="ml-3 pt-2">{pname}</p>

          </div>  
        </>
    )
}

export default CenterName

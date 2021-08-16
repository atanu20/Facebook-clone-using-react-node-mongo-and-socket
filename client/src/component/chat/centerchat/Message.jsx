import { format } from "timeago.js";
import React,{ useEffect,useState} from 'react'
import axios from 'axios'

const Message = ({own,message,friendId}) => {
    const [user, setUser] = useState([]);
    const FacebookUserId=localStorage.getItem('FacebookUserId')
    
    const getUser = async () => {
        try {
          let res=await axios.get(`http://localhost:8000/myprofile/${friendId}`);
   
            // console.log(res.data)
         
          setUser(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      useEffect(() => {
          if(friendId)
          {
            getUser()

          }
         
      }, [friendId])


     



    return (
        <>
        {
            message ? (
                <>
                <div className={own ? "message own" : "message"}>
           <div className="messageTop">
               {
                   own ?
                   (
                       <>
                       
                <p className="messageText">{message.text}</p>
                

                       </>
                   ) :(
                       <>
                       <img
                className="messageImg"
                src={user.profilePicture ? `../profile/${user.profilePicture}` : `../assets/pro.png`}
                alt=""
                />
                <p className="messageText">{message.text}</p>

                       </>
                   )
               }
               
            </div>
            <div className="messageBottom"> {format(message.date)} </div>
           </div>
            

                </>
            ) : null
        }
         
        </>
    )
}

export default Message

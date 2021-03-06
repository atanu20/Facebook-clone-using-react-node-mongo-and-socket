import React,{ useEffect,useState} from 'react'
import CenterName from './CenterName'
import axios from 'axios'

const CenterTop = ({friendId}) => {
    const [user, setUser] = useState([]);
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
            <CenterName
            profilePicture={user.profilePicture}
            userID={user.userID}
            />
        </>
    )
}

export default CenterTop

import { useEffect, useState } from 'react'
import './Profile.css'
import getUserByUsername from '../../api/endpoints'


function Profile() {
  const [username, setUsername] = useState(''); 
  useEffect(() =>{
    async function fetchData(){
      const user = await getUserByUsername('adfads');
      console.log(user);  
      setUsername(user.username);
    }
    fetchData();
  }, [])


  return (
    <>
    <div className="profileContainer">
        <div className="profilePage">
        <div className="profileContainer">
            <div className="profileCircle"></div>
            <div className="userName">{username}
              <div className="followers">10 Followers</div>
              <div className="following">4 Following</div>
              <div className="posts">My Posts</div>
            </div>
          </div>
        </div>
    </div>
    <hr />
    <div className="container">
      <div className="grid">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
    </div>
  </div>
    </>
  )
}

export default Profile
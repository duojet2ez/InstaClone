import { useEffect, useState } from 'react'
import './Profile.css'
import { getUserByUsername } from '../../api/endpoints';

interface User{
  username: string;
  followerCount: number;
  followingCount: number;
  profilePicture: string;
  posts: {
    img: string;
    id: number;
  }[]; 
}

function Profile() {
  const [user, setUser] = useState<User>({} as User); 
  useEffect(() =>{
    async function fetchData(){
      const user = await getUserByUsername('Eric');
      setUser(user);
    }
    fetchData();
  }, [])


  return (
    <>
    <div className="profileContainer">
        <div className="profilePage">
        <div className="profileContainer">
            <div className="profileCircle">
              <img src={user.profilePicture} alt="Profile"/>
            </div>
            <div className="userName">{user.username}
              <div className="followers">{user.followerCount} Followers</div>
              <div className="following">{user.followingCount} Following</div>
              <div className="posts">My Posts</div>
            </div>
          </div>
        </div>
    </div>
    <hr />
    <div className="container">
      <div className="grid">
        <div className="box">
          <img src={user.posts[0].img} alt="Post"/>
        </div>
        <div className="box">
          <img src={user.posts[1].img} alt="Post"/>
        </div>
        <div className="box">
          <img src={user.posts[2].img} alt="Post"/>
        </div>
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
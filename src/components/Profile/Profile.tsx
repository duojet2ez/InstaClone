import { useEffect, useState } from 'react'
import './Profile.css'
import { getUserByUsername, Post } from '../../api/endpoints';



function PostItem(props:Post){
  return(
    <div className="box">
    <img src={props.img} alt="Post"/>
  </div>
  )
}


//probably should make individual states for User don't set object in state
//why didn't make isLoggedInUsersProfile a state? think about that and try making it a state
//login page stuff 
function Profile({profileUsername, loggedInUsername}) {
  const [username, setUsername] = useState(''); 
  const [followingCount, setFollowingCount] = useState(0); 
  const [followerCount, setFollowerCount] = useState(0); 
  const [profilePicture, setProfilePicture] = useState(''); 
  const [postData, setPostData] = useState<Post[]>([]);  
  useEffect(() =>{
    async function fetchData(){
      const user = await getUserByUsername(profileUsername);
      setUsername(user.username);
      setFollowingCount(user.followingCount);
      setFollowerCount(user.followerCount);
      setProfilePicture(user.profilePicture);
      setPostData(user.posts); 
    }
    fetchData();
  }, [profileUsername])

  const isLoggedInUsersProfile:boolean = profileUsername === loggedInUsername;
  return (
    <>
    <div className="profileContainer">
        <div className="profilePage">
        <div className="profileContainer">
            <div className="profileCircle">
              <img src={profilePicture} alt="Profile"/>
            </div>
            <div className="userName">{username}
              <div className="followers">{followerCount} Followers</div>
              <div className="following">{followingCount} Following</div> <div>{isLoggedInUsersProfile && "edit"}</div>
              <div className="posts">My Posts</div>
            </div>
          </div>
        </div>
    </div>
    <hr />
    <div className="container">
      <div className="grid">
        {postData.map((p) => {
          return <PostItem 
                    img={p.img}  
                    id={p.id}
                    /> 
        })}
    </div>
  </div>
    </>
  )
}

export default Profile


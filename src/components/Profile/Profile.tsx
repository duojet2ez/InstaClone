import './Profile.css'


function Profile() {
  return (
    <>
    <div className="profileContainer">
        <div className="profilePage">
        <div className="profileContainer">
            <div className="profileCircle"></div>
            <div className="userName">Username
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
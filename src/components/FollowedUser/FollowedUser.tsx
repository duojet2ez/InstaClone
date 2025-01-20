import './FollowedUser.css'

function FollowedUser() {
  return (
    <>
    <div className="followedUserContainer">
        <div className="followedUserPage">
          <div className="profileContainer">
            <div className="profileCircle"></div>
            <div className="userName">Followed User
              <div className="followers">10 Followers</div>
              <div className="following">4 Following</div>
              <div className="posts">Posts</div>
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

export default FollowedUser
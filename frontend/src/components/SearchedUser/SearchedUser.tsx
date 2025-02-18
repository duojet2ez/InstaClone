import './SearchedUser.css'

function SearchedUser() {
  return (
    <>
    <div className='searchedUserContainer'>
        <div className='searchedUserPage'>
          <div className="profileContainer">
              <div className="profileCircle"></div>
              <div className="userName">Searched User
                <div className="followers">10 Followers</div>
                <div className="following">4 Following</div>
                <div className="followButton">
                  <div className="followButtonText">Follow</div>
                </div>
              </div>
          </div>
        </div>
    </div>
    <div className="privateMessage">This account is private</div>
    <div className="privateMessage2">Follow this account to see their photos and videos</div>
    <hr />
    </>
  )
}

export default SearchedUser
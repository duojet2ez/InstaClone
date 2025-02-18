import Header from './components/Header/Header.tsx'
import Registration from './components/Registration/Registration.tsx'
import Login from './components/Login/Login.tsx'
import ActivityFeed from './components/ActivityFeed/ActivityFeed.tsx'
import CreatePost from './components/CreatePost/CreatePost.tsx'
import FollowedUser from './components/FollowedUser/FollowedUser.tsx'
import SearchedUser from './components/SearchedUser/SearchedUser.tsx'
import Profile from './components/Profile/Profile.tsx'
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router'


{/* <Routes>
  <Route path="dashboard" element={<Dashboard />}>
    <Route index element={<Home />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes> */}

const loginStatus:boolean = true;
function App() {
    // const [currentPage, setCurrentPage] = useState('profile'); 
  return (
    <BrowserRouter>
      <Header isLoggedIn = {loginStatus} />
      <Routes>
          <Route path="register" element={<Registration />}></Route> 
          <Route index element={<Login />}></Route>
          <Route path="feed" element={<ActivityFeed />}></Route>
          <Route path="createPost" element={<CreatePost />}></Route> 
          <Route path="followedUser" element={<FollowedUser />}></Route> 
          <Route path="searchedUser" element={<SearchedUser />}></Route> 
          {/* {currentPage === 'profile' && <Profile 
                                                  profileUsername={"joe"}
                                                  loggedInUsername={"joe"}
                                                  />} */}
      </Routes>
    </BrowserRouter>
    )
}

export default App



// consider using enums for page checking


//also use app to create new component that holds universal css settings for all pages and html




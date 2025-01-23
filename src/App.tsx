import Header from './components/Header/Header.tsx'
import Registration from './components/Registration/Registration.tsx'
import Login from './components/Login/Login.tsx'
import ActivityFeed from './components/ActivityFeed/ActivityFeed.tsx'
import CreatePost from './components/CreatePost/CreatePost.tsx'
import FollowedUser from './components/FollowedUser/FollowedUser.tsx'
import SearchedUser from './components/SearchedUser/SearchedUser.tsx'
import Profile from './components/Profile/Profile.tsx'
import { useState } from 'react';

const loginStatus:boolean = true;
function App() {
    const [currentPage, setCurrentPage] = useState('profile'); 
  return (
    <>
        <Header isLoggedIn = {loginStatus} />
        {currentPage === 'registration' && <Registration setCurrentPage = {setCurrentPage} />}
        {currentPage === 'login' && <Login setCurrentPage = {setCurrentPage}/>}
        {/* <ActivityFeed /> */}
        {/* <CreatePost /> */}
        {/* <FollowedUser /> */}
        {/* <SearchedUser /> */}
         {currentPage === 'profile' && <Profile />}
    </>
    )
}

export default App



// consider using enums for page checking


//also use app to create new component that holds universal css settings for all pages and html
//finish hardcoding simulate fetch request for profile page and activity feed
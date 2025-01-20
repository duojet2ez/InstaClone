import Header from './components/Header/Header.tsx'
import Registration from './components/Registration/Registration.tsx'
import Login from './components/Login/Login.tsx'
import ActivityFeed from './components/ActivityFeed/ActivityFeed.tsx'
import CreatePost from './components/CreatePost/CreatePost.tsx'
import FollowedUser from './components/FollowedUser/FollowedUser.tsx'
import { useState } from 'react';

const loginStatus:boolean = true;
function App() {
    const [currentPage, setCurrentPage] = useState('login'); 
  return (
    <>
        <Header isLoggedIn = {loginStatus} />
        {/* {currentPage === 'registration' && <Registration setCurrentPage = {setCurrentPage} />} */}
        {/* {currentPage === 'login' && <Login setCurrentPage = {setCurrentPage}/>} */}
        {/* <ActivityFeed /> */}
        {/* <CreatePost /> */}
        <FollowedUser />
    </>
    )
}

export default App



// consider using enums for page checking
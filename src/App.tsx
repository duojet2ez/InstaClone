import Header from './components1/Header.tsx'
import Registration from './components1/Registration.tsx'
import Login from './components1/Login.tsx'
import ActivityFeed from './components1/Activity-Feed.tsx'
import { useState } from 'react';

const loginStatus:boolean = true;
function App() {
    const [currentPage, setCurrentPage] = useState('login'); 
  return (
    <>
        <Header isLoggedIn = {loginStatus} />
        {currentPage === 'registration' && <Registration setCurrentPage = {setCurrentPage} />}
        {currentPage === 'login' && <Login setCurrentPage = {setCurrentPage}/>}
        {currentPage === 'activity-feed' && <ActivityFeed />}
    </>
    )
}

export default App



// consider using enums for page checking
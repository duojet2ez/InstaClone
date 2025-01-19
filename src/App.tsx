import Header from './components/Header/Header.tsx'
import Registration from './components/Registration/Registration.tsx'
import Login from './components/Login/Login.tsx'
import ActivityFeed from './components/ActivityFeed/ActivityFeed.tsx'
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
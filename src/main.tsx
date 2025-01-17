import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components1/Header.tsx'
import Registration from './components1/Registration.tsx'
import Login from './components1/Login.tsx'
import ActivityFeed from './components1/Activity-Feed.tsx'


const loginStatus:boolean = true;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header isLoggedIn = {loginStatus} />
    <Registration />
    {/* <Login /> */}
    {/* <Activity-Feed />  */}
  </StrictMode>,
)

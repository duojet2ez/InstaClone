import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components1/Header.tsx'
import Registration from './components1/Registration.tsx'
import Login from './components1/Login.tsx'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Registration />
    <Login />

  </StrictMode>,
)

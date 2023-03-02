import React from 'react'
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { loggedUser, login, logout } = useGlobalContext(); 

  return (
    <>
    <div>Navbar @ Navbar.jsx</div>
    {!loggedUser && <button onClick={login}>Login</button>}
    {loggedUser && <p>Welcome back, {loggedUser.name}! <button onClick={logout}>Logout</button></p>}
    </>
  )
}

export default Navbar
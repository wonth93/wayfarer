import React from 'react'
import { useGlobalContext } from '../context';
import { Link } from "react-router-dom";

const Navbar = () => {
  const { loggedUser, login, logout } = useGlobalContext(); 

  return (
    <>
    <div>Navbar @ Navbar.jsx</div>
    {!loggedUser && <button onClick={login}>Login</button>}
    {loggedUser && <p>Welcome back, {loggedUser.name}! <Link onClick={logout} to={'/'}><button>Logout</button></Link></p>}
    </>
  )
}

export default Navbar
import React from 'react'
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { loggedUser } = useGlobalContext(); 

  return (
    <>
    <div>Navbar</div>
    {loggedUser && `Welcome back, ${loggedUser.name}!`}
    </>
  )
}

export default Navbar
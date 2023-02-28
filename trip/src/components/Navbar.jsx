import React from 'react'
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { state } = useGlobalContext(); 
  return (
    <>
    <div>Navbar</div>
    {state.user && `Welcome back!`}
    </>
  )
}

export default Navbar
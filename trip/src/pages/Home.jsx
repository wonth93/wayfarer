import React from 'react'
import Welcome from "../components/Welcome"
import TripList from '../components/TripList'
import { useGlobalContext } from '../context'


const Home = () => {

  const { state } = useGlobalContext();

  return (
    <>
      <div>Home</div>
      {!state.user && <Welcome />}
      {state.user && <TripList />}
    </>
  )
}

export default Home
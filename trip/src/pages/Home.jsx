import React from 'react'
import Welcome from "../components/LandingPage/Welcome"
import { useGlobalContext } from '../context'
import UserTripsContainer from '../components/Trips/UserTripsContainer'


const Home = () => {

  const { state } = useGlobalContext();

  return (
      <div>
      {!state.user && <Welcome />}
      {state.user && <UserTripsContainer />}
      </div>
  )
}

export default Home;
import React, { useState, useEffect } from 'react'
import Welcome from "../components/Welcome"
import TripList from '../components/TripList'
import TripForm from '../components/TripForm'
import { useGlobalContext } from '../context'
import axios from 'axios'
import UserTripsContainer from '../components/UserTripsContainer'


const Home = () => {

  const { state } = useGlobalContext();

  return (
    <>
      <div>
      {!state.user && <Welcome />}
      {state.user && <UserTripsContainer />}
      </div>
    </>
  )
}

export default Home;
import React from 'react'
import TripListItem from "./TripListItem"
import { useGlobalContext } from '../context';

const TripList = () => {

  const { userTrips } = useGlobalContext(); 

  if (userTrips.length < 1) {
    return (
      <div>No trips yet!</div>
    );
  }

  const userTripItems = userTrips.map((trip) => {
    return (
      <TripListItem key={trip.id} {...trip} />
    )
  })

  return (
    <>
    <div>My Trips:</div>
    {userTripItems}
    </>
  )
}

export default TripList
import React from 'react'
import TripListItem from "./TripListItem"
import { useGlobalContext } from '../context';

const TripList = () => {

  const { state, userTrips } = useGlobalContext(); 

  if (userTrips.length < 1) {
    return (
      <div>No cocktails matched your criteria</div>
    );
  }

  console.log(userTrips)
  const userTripItems = userTrips.map((trip) => {
    return (
      <TripListItem key={trip.id} {...trip} />
    )
  })

  return (
    <>
    <div>TripList</div>
    {userTripItems}
    </>
  )
}

export default TripList
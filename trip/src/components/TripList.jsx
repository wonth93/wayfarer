import React from 'react'
import TripListItem from "./TripListItem"
import { useGlobalContext } from '../context';

const TripList = ({trips}) => {

  // const { userTrips } = useGlobalContext();

  if (trips.length < 1) {
    return (
      <div>No trips yet!</div>
    );
  }

  const userTripItems = trips.map((trip) => {
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
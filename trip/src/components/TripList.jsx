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

  // if (!trips) {
  //   return (
  //     <div>No trips yet!</div>
  //   );
  // }

  console.log(trips)

  return (
    <>
    <div>My Trips:</div>
    {/* {trips.length < 1} */}
    {trips && trips.map((trip) => {
      return <TripListItem key={trip.id} {...trip}/>
    })}
    </>
  )
}

export default TripList
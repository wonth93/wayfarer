import React from 'react'
import TripListItem from "./TripListItem"
import { Typography } from '@material-ui/core';

const TripList = ({trips, deleteTrip}) => {


  if (trips.length < 1) {
    return (
      <Typography variant="h2" align="center">No trips yet!</Typography>
    );
  }

  return (
    <>
    <Typography variant="h2" align="center">Your Planned Trips</Typography>
    {trips && trips.map((trip) => {
      return <TripListItem deleteTrip={deleteTrip} key={trip.id} {...trip}/>
    })}
    </>
  )
}

export default TripList
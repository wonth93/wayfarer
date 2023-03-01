import React from 'react'
import { useGlobalContext } from '../../context'

const TripsDetails = () => {
  const { singleTrip } = useGlobalContext();
  //console.log(singleTrip)
  if (!singleTrip) return (
    <p>No trip details!</p>
  )

  return (
    <div>TripsDetails
      <p>{singleTrip.city}, {singleTrip.country}</p>
      <p>{singleTrip.departure_flight_date} - {singleTrip.return_flight_date}</p>
    </div>
  )
}

export default TripsDetails
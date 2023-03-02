import React from 'react'
import { useGlobalContext } from '../../context'

const TripsDetails = ({trip}) => {
 
  return (
    <div>TripsDetails
      <p>{trip.city}, {trip.country}</p>
      <p>{trip.departure_flight_date} - {trip.return_flight_date}</p>
    </div>
  )
}

export default TripsDetails
import React from 'react'
import { useGlobalContext } from '../../context'
import { Typography, Box } from '@material-ui/core'
import FlightIcon from '@material-ui/icons/Flight';
import HotelIcon from '@material-ui/icons/Hotel';

const TripsDetails = ({trip}) => {
 
  return (
    <div>
      <Typography gutterBottom variant="h6">Important Details</Typography>
      <Box display="flex" alignItems="center"><FlightIcon /><Typography variant="subtitle1">{trip.departure_flight_date} - {trip.return_flight_date}</Typography></Box>
      <Box display="flex" alignItems="top"><HotelIcon /><Typography variant="subtitle1">{trip.hotel_name}, {trip.hotel_address}</Typography></Box>
    </div>
  )
}

export default TripsDetails
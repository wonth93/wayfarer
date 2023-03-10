import React from 'react'
import { Typography, Box } from '@material-ui/core'
import FlightIcon from '@material-ui/icons/Flight';
import HotelIcon from '@material-ui/icons/Hotel';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import { DateTime } from "luxon";

const TripsDetails = ({trip}) => {
 
  return (
    <div>
      <Typography gutterBottom variant="h6">Important Details</Typography>
      <Box display="flex" alignItems="center"><FlightIcon /><Typography variant="subtitle1">{DateTime.fromSQL(trip.departure_flight_date).toFormat('LLL dd yyyy')} - {DateTime.fromSQL(trip.return_flight_date).toFormat('LLL dd yyyy')}</Typography></Box>
      <Box display="flex" alignItems="top"><HotelIcon /><Typography variant="subtitle1">{trip.hotel_name}, {trip.hotel_address}</Typography></Box>
      <Box display="flex" alignItems="top"><FlightLandIcon /><Typography variant="subtitle1">{trip.departure_flight_code}, {trip.departure_flight_time}</Typography></Box>
      <Box display="flex" alignItems="top"><FlightTakeoffIcon /><Typography variant="subtitle1">{trip.return_flight_code}, {trip.return_flight_time}</Typography></Box>
    </div>
  )
}

export default TripsDetails
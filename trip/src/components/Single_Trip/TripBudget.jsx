import React, {useEffect, useState} from 'react'
import { Typography, Box } from '@material-ui/core'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const TripBudget = ({trip, activities}) => {
  const [activitiesCost, setActivitiesCost] = useState(0)
  // const [hotelCost, setHotelCost] = useState(0)
  // const [flightCost, setFlightCost] = useState(0)
  const [totalCost, setTotalCost] = useState(0)

  useEffect(() => {
    // Calculate and set activities cost
    const calcActivitiesCost = (activities) => {
      const totalCost = activities.reduce((acc, curr) => {
      return acc += Number(curr.activity_cost)
    }, 0)
      setActivitiesCost(totalCost)
    }
    calcActivitiesCost(activities)
  }, [activities])

  useEffect(() => {
     // Calculate and set total trip cost
     const calcTotalCost = (hotel, trip, activities) => {
      const totalCost = Number(hotel) + Number(trip) + Number(activities)
      setTotalCost(totalCost)
    }
    calcTotalCost(trip.hotel_cost, trip.flight_cost, activitiesCost)
  }, [activitiesCost, trip])

  // console.log(trip.hotel_cost, trip.flight_cost, activities)
  return (
      <div>
        <Typography variant="h6">Trip Budget</Typography>
        <Box display="flex" alignItems="center"><MonetizationOnIcon /><Typography variant="subtitle1">Total Cost: ${totalCost}</Typography></Box>
        <Box display="flex" alignItems="center"><AttachMoneyIcon /><Typography variant="subtitle1">Hotel: ${trip.hotel_cost}</Typography></Box>
        <Box display="flex" alignItems="center"><AttachMoneyIcon /><Typography variant="subtitle1">Flight: ${trip.flight_cost}</Typography></Box>
        <Box display="flex" alignItems="center"><AttachMoneyIcon /><Typography variant="subtitle1">Activities: ${activitiesCost}</Typography></Box>
    </div>
  )
}

export default TripBudget
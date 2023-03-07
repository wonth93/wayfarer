import React, {useEffect, useState} from 'react'

const TripBudget = ({trip, activities}) => {
  const [activitiesCost, setActivitiesCost] = useState(0)
  const [hotelCost, setHotelCost] = useState(0)
  const [flightCost, setFlightCost] = useState(0)
  const [totalCost, setTotalCost] = useState(0)

  useEffect(() => {
    // Calculate and set activities cost
    const calcActivitiesCost = (activities) => {
      const totalCost = activities.reduce((acc, curr) => {
      return acc += curr.activity_cost
    }, 0)
      setActivitiesCost(totalCost)
    }
    calcActivitiesCost(activities)
  }, [activities])

  useEffect(() => {
     // Calculate and set total trip cost
     const calcTotalCost = (hotel, trip, activities) => {
      const totalCost = hotel + trip + activities
      setTotalCost(totalCost)
    }
    calcTotalCost(trip.hotel_cost, trip.flight_cost, activitiesCost)
  }, [activitiesCost, trip])

  console.log(trip.hotel_cost, trip.flight_cost, activities)
  return (
    <div>TripBudget
      <p>Hotel Cost: {trip.hotel_cost}</p>
      <p>Flight Cost: {trip.flight_cost}</p>
      <p>Activity Cost: {activitiesCost}</p>
      <p>Total Cost: {totalCost}</p>
    </div>
  )
}

export default TripBudget
import React from 'react';
import TripDetails from './TripsDetails'
import TripBudget from './TripBudget'
import WeatherData from './WeatherData';

const TripInfoContainer = ({props}) => {
  console.log(props)
  return (
    <div>TripInfoContainer
      <TripDetails />
      <TripBudget />
      <WeatherData />
    </div>
  )
}

export default TripInfoContainer

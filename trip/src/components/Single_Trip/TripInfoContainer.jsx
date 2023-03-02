import React from 'react';
import TripDetails from './TripsDetails'
import TripBudget from './TripBudget'
import WeatherData from './WeatherData';

const TripInfoContainer = ({trip}) => {
  //console.log(props)
  return (
    <div>----TripInfoContainer -----
      <TripDetails trip={trip}/>
      {/* <TripBudget />
      <WeatherData /> */}
      ----TripInfoContainer -----
    </div>
  )
}

export default TripInfoContainer

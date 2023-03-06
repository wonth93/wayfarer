import React from 'react';
import TripDetails from './TripsDetails'
import TripBudget from './TripBudget'
import WeatherData from './WeatherData';
import { Link } from "react-router-dom";

const TripInfoContainer = ({trip, deleteTrip}) => {
  //console.log(props)
  return (
    <div>----TripInfoContainer -----
      <TripDetails trip={trip} />
      <TripBudget trip={trip} />
      <WeatherData trip={trip}/>
      ----TripInfoContainer -----
    </div>
  )
}

export default TripInfoContainer

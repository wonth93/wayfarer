import React from 'react';
import TripDetails from './TripsDetails'
import TripBudget from './TripBudget'
import WeatherData from './WeatherData';
import { Link } from "react-router-dom";

const TripInfoContainer = ({trip, deleteTrip}) => {
  //console.log(props)
  return (
    <div>----TripInfoContainer -----
      <TripDetails trip={trip}/>
      {/* <TripBudget /> */}
      <WeatherData trip={trip}/>
      <button onClick={() => deleteTrip(trip.id)}>Delete This Trip</button>
      ----TripInfoContainer -----
    </div>
  )
}

export default TripInfoContainer

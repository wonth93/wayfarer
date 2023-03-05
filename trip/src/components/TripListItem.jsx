import React from 'react';
import { Link } from "react-router-dom";
import { useGlobalContext } from '../context';

const TripListItem = ({id, city, country, deleteTrip}) => {
  //const { setTrip } = useGlobalContext();
  console.log(city, country)
  return (
    <div>
      <Link to={`/trips/${id}`}>{city}, {country}</Link>
      <Link to={'/'}><button onClick={() => deleteTrip(id)}>Delete This Trip</button></Link>
    </div>
  )
}

export default TripListItem;
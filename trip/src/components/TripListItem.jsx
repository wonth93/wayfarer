import React from 'react';
import { Link } from "react-router-dom";
import { useGlobalContext } from '../context';

const TripListItem = ({id, city, country}) => {
  //const { setTrip } = useGlobalContext();
  console.log(city, country)
  return (
    <div>
      <Link to={`/trips/${id}`}>{city}, {country}</Link>
    </div>
  )
}

export default TripListItem;
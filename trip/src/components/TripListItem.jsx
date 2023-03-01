import React from 'react'
import { Link } from "react-router-dom"

const TripListItem = ({id, city, country}) => {
  return (
    <Link to={`/trips/${id}`}>{city}, {country}</Link>
  )
}

export default TripListItem
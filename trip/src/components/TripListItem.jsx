import React from 'react'
import { Link } from "react-router-dom"

const TripListItem = ({id, city, country}) => {
  return (
    <div>
      <Link to={`/trips/${id}`}>{city}, {country}</Link>
    </div>
  )
}

export default TripListItem;
import React from 'react'

const TripListItem = ({id, city, country}) => {
  return (
    <p>{city}, {country}</p>
  )
}

export default TripListItem
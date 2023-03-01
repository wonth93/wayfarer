import React from 'react'

const TripListItem = ({id, city, country}) => {
  return (
    <>
    <p>My Trips:</p>
    <p>{city}, {country}</p>
    </>
  )
}

export default TripListItem
import React from 'react'
import TripInfoContainer from "../components/TripInfoContainer"
import { useParams } from 'react-router-dom';

const SingleTrip = () => {
  const { id } = useParams();

  return (
    <>
    <div>SingleTrip</div>
    <TripInfoContainer />
    </>
  )
}

export default SingleTrip
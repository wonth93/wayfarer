import React from 'react'
import TripInfoContainer from "../components/Single_Trip/TripInfoContainer"
import ActivityList from '../components/Single_Trip/ActivityList';
import ActivityForm from '../components/Single_Trip/ActivityForm';

const SingleTrip = () => {

  return (
    <>
    <div>Single Trip</div>
    <TripInfoContainer />
    <ActivityList />
    <ActivityForm />
    </>
  )
}

export default SingleTrip;
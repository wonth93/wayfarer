import React, {useState, useEffect} from 'react'
import TripInfoContainer from "../components/Single_Trip/TripInfoContainer"
import ActivityContainer from '../components/Single_Trip/Activities/ActivityContainer';
import ActivityForm from '../components/Single_Trip/Activities/ActivityForm';
import { useGlobalContext } from '../context';
import { getTripFromTrips } from '../helpers/selectors';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleTrip = () => {
  const {id} = useParams()
  const [loading, setLoading] = useState(false)
  const [trip, setTrip] = useState(null)

  useEffect(() => {
    setLoading(true)
    async function getTrip() {
      try {
        const tripResponse = await fetch(`http://localhost:8080/api/trips/${id}`);
        const data = await tripResponse.json();
        console.log(data)
        if (data) {
        setTrip(data)
      } else {
        setTrip(null)
      }
      setLoading(false)
      } catch (error) {
        setLoading(false);
      }
    }
    getTrip()
  }, [id])

  if (loading) {
    return (
      <p>Loading trip info</p>
    )
  }

  if (!trip) {
    return (
      <p>Can't seem to fetch trip details</p>
    )
  }

  return (
    <>
    <div>Single Trip to {trip.city}, {trip.country}</div>
    <TripInfoContainer trip={trip}/>
    <ActivityContainer trip={trip} />
    </>
  )
}

export default SingleTrip;
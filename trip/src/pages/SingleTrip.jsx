import React, {useState, useEffect} from 'react'
import TripInfoContainer from "../components/Single_Trip/TripInfoContainer"
import ActivityContainer from '../components/Single_Trip/Activities/ActivityContainer';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleTrip = () => {
  const {id} = useParams()
  const [loading, setLoading] = useState(false)
  const [trip, setTrip] = useState(null)
  const [activities, setActivities] = useState([])
  // const [renderActivities, setRenderActivities] = useState(1)

  //Load single trip info on render
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

    // Load all activity data on render
    useEffect(() => {
      setLoading(true)
      async function getActivities() {
        try {
          const activitiesResponse = await fetch(`http://localhost:8080/api/activities/${id}`);
          const data = await activitiesResponse.json();
          console.log(data)
          if (data) {
          setActivities(data)
          } else {
          setActivities(null)
          }
          setLoading(false)
        } catch (error) {
          setLoading(false);
          }
      }
      getActivities()
    }, [setActivities])
  
    // Delete activitiy
    const deleteActivity = (id) => {
      axios
        .post(`http://localhost:8080/api/activities/delete`, {
          activity_id: id
        })
        .then((res) => {
          console.log(res)
          const deletedId = res.data.activities[0].id;
          return deletedId;
        })
        .then((deletedId) => {
          const updatedActivities = activities.filter((activity) => activity.id !== deletedId)
          setActivities(updatedActivities);
        })
        .catch(err => console.log(err));
    }
  
    //Functionality to add an activity - pass this down to Activity Form as a prop so activities state is updated on submit
    const addActivity = (activityState) => { 
      axios
        .post("http://localhost:8080/api/activities/add", {
          user_id: activityState.user_id,
          trip_id: activityState.trip_id,
          activity_name: activityState.activity_name,
          activity_address: activityState.activity_address,
          lat: activityState.lat,
          long: activityState.long,
          activity_cost: activityState.activity_cost,
          activity_date: activityState.activity_date,
          activity_time: activityState.activity_time,   
          activity_type: activityState.activity_type  
        })
        .then((res) => {
          console.log(res)
          const newTrip = res.data.activities[0];
          return newTrip;
        })
        .then((newActivity) => {
          setActivities([...activities, newActivity]);
        })
        .catch(err => console.log(err));
    };

  // Render components
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
    <TripInfoContainer trip={trip} activities={activities} />
    <ActivityContainer trip={trip} activities={activities} deleteActivity={deleteActivity} addActivity={addActivity} />
    </>
  )
}

export default SingleTrip;
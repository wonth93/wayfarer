import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ActivityForm from './ActivityForm'
import ActivityList from './ActivityList'
import axios from 'axios'

const ActivityContainer = ({trip}) => {

  const {id} = useParams()
  const [loading, setLoading] = useState(false)
  const [activities, setActivities] = useState([])

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
  }, [])

  //Functionality to add an activity 
  const addTrip = (activityState) => { 
    axios
      .post("http://localhost:8080/api/activities/add", {
        user_id: activityState.user_id,
        trip_id: activityState.trip_id,
        activity_name: activityState.activity_name,
        activity_address: activityState.activity_address,
        lat: activityState.lat,
        lng: activityState.lng,
        activity_cost: activityState.activity_cost,
        activity_date: activityState.date,
        activity_time: activityState.activity_time      
      })
      .then((res) => {
        const newTrip = res.data.activities[0];
        return newTrip;
      })
      .then((newActivities) => {
        setActivities([...activities, newActivities]);
      });
  };

  // Render
  if (loading) {
    return (
      <>
      <p>Loading activities info</p>
      </>
    )
  }

  if (!activities) {
    return (
      <>
      <p>Can't seem to fetch activity details</p>
      <ActivityForm addTrip={addTrip}/>
      </>
    )
  }

  return (
    <div>ActivityContainer
      <ActivityList activities={activities}/>
      <ActivityForm addTrip={addTrip}/>
    </div>
  )
}

export default ActivityContainer
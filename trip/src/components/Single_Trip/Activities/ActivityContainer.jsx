import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ActivityForm from './ActivityForm'
import ActivityList from './ActivityList'
import axios from 'axios'

const ActivityContainer = () => {

  const {id} = useParams()
  const [loading, setLoading] = useState(false)
  const [activities, setActivities] = useState([])
  // const [renderActivities, setRenderActivities] = useState(1)

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

  // Render
  if (loading) {
    return (
      <>
      <p>Loading activities info</p>
      </>
    )
  }
  // **** this is not rendering under tokyo
  if (!activities) {
    return (
      <>
      <p>Can't seem to fetch activity details</p>
      <ActivityForm addActivity={addActivity}/>
      </>
    )
  }

  return (
    <div>ActivityContainer
      <ActivityList activities={activities}/>
      <ActivityForm addActivity={addActivity}/>
    </div>
  )
}

export default ActivityContainer
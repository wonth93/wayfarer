import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ActivityForm from './ActivityForm'
import ActivityList from './ActivityList'
import Map from '../Map'
import axios from 'axios'

const ActivityContainer = ({trip, activities, deleteActivity, addActivity}) => {

  const {id} = useParams()
  const [loading, setLoading] = useState(false)

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
      <ActivityList activities={activities} deleteActivity={deleteActivity}/>
      {/* <Map activities={activities} trip={trip} /> */}
      {/* <ActivityForm addActivity={addActivity}/> */}
    </div>
  )
}

export default ActivityContainer
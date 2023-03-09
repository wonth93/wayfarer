import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ActivityForm from './ActivityForm'
import ActivityList from './ActivityList'
import { Typography } from '@material-ui/core'


const ActivityContainer = ({trip, activities, deleteActivity, addActivity}) => {

  const {id} = useParams()
  const [loading, setLoading] = useState(false)

  // // Render
  // if (loading) {
  //   return (
  //     <>
  //     <p>Loading activities info</p>
  //     </>
  //   )
  // }
  // // **** this is not rendering under tokyo
  // if (!activities) {
  //   return (
  //     <>
  //     <p>Can't seem to fetch activity details</p>
  //     <ActivityForm addActivity={addActivity}/>
  //     </>
  //   )
  // }

  return (
    <div>
      <Typography gutterBottom align="center" variant="h2">Your planned activities</Typography>
      <ActivityList activities={activities} deleteActivity={deleteActivity}/>
    </div>
  )
}

export default ActivityContainer
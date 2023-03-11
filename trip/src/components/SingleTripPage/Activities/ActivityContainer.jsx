import React from 'react'
import ActivityList from './ActivityList'
import { Typography } from '@material-ui/core'


const ActivityContainer = ({activities, deleteActivity}) => {

  return (
    <div>
      <Typography gutterBottom align="center" variant="h2">Your planned activities</Typography>
      <ActivityList activities={activities} deleteActivity={deleteActivity}/>
    </div>
  )
}

export default ActivityContainer
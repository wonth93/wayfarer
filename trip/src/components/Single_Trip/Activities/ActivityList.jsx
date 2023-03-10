import React from 'react';
import ActivityListItem from './ActivityListItem'
import { Typography, Box } from '@material-ui/core'

const ActivityList = ({activities, deleteActivity}) => {

  if (activities.length < 1) {
    return (
      <Typography align="center">You haven't planned any activities yet!</Typography>
    );
  }

  const activityList = activities.map((activity) => {
    return (
      <ActivityListItem deleteActivity={deleteActivity} key={activity.id} {...activity} />
    )
  })

  return (  
      <Box>
        {activityList}
      </Box>
   
  )
}

export default ActivityList;

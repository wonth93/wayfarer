import React from 'react';
import ActivityListItem from './ActivityListItem'
import { Grid, Box } from '@material-ui/core'

const ActivityList = ({activities, deleteActivity}) => {

  if (activities.length < 1) {
    return (
      <div>No activities yet!</div>
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

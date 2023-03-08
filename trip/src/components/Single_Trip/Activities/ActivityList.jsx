import React from 'react';
import { useGlobalContext } from '../../../context';
import ActivityListItem from './ActivityListItem'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    borderRadius: '10px',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
    marginTop: '20px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

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
      <section>
        {activityList}
      </section>
   
  )
}

export default ActivityList;

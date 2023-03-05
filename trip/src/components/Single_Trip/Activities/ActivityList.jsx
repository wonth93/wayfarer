import React from 'react';
import { useGlobalContext } from '../../../context';
import ActivityListItem from './ActivityListItem'

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
      Activity list:
      <section>
        {activityList}
      </section>
    </section>
  )
}

export default ActivityList;

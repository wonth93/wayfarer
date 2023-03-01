import React from 'react';
import { useGlobalContext } from '../../context';
import ActivityListItem from './ActivityListItem';

const ActivityList = () => {
  
  const { userActivities } = useGlobalContext();

  if (userActivities.length < 1) {
    return (
      <div>No activities yet!</div>
    );
  }

  const userActivityItems = userActivities.map((activity) => {
    return (
      <ActivityListItem key={activity.id} {...activity} />
    )
  })

  return (
    <section>
      Activity list:
      <section>
        {userActivityItems}
      </section>
    </section>
  )
}

export default ActivityList;

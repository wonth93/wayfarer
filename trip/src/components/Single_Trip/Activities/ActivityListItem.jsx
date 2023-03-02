import React from "react";

const ActivityListItem = ({activity_name, activity_address}) => {
  return (
    <p>{activity_name}, {activity_address}</p>
  )
}

export default ActivityListItem;

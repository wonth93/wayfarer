import React from "react";

const ActivityListItem = ({activity_name, activity_address, id, deleteActivity}) => {
  return (
    <div>
      <p>{activity_name}, {activity_address}</p>
      <button onClick={() => deleteActivity(id)}>Delete This Activity</button>
    </div>
  )
}

export default ActivityListItem;

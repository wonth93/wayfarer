import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const ActivityListItem = ({activity_name, activity_address, id, deleteActivity, activity_date, activity_cost}) => {
  return (
    <div>
      <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            {/* <Typography variant="h6">Column 1</Typography> */}
            <Typography variant="subtitle1">{activity_date}</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            {/* <Typography variant="h6">Column 2</Typography> */}
            <Typography variant="subtitle1">{activity_name}</Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            {/* <Typography variant="h6">Column 3</Typography> */}
            <Typography>{activity_address}</Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            {/* <Typography variant="h6">Column 4</Typography> */}
            <Typography variant="subtitle1">${activity_cost}</Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            {/* <Typography variant="h6">Column 5</Typography> */}
            {/* <Typography variant="subtitle1">Content for column 5</Typography> */}
            <button onClick={() => deleteActivity(id)}>Delete This Activity</button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
      {/* <p>{activity_name}, {activity_address}</p>
      <button onClick={() => deleteActivity(id)}>Delete This Activity</button> */}
    </div>
  )
}

export default ActivityListItem;

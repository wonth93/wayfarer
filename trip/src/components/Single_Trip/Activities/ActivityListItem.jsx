import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ActivityForm from "./ActivityForm";

const ActivityListItem = ({activity_name, activity_address, id, deleteActivity, activity_date, activity_cost}) => {
  const [open, setOpen] = React.useState(false);
  const [openActivityForm, setOpenActivityForm] = React.useState(false);

  // functions for handling form modal
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const clickActivityForm = () => {
    setOpenActivityForm(true);
  };

  const closeActivityForm = () => {
    setOpenActivityForm(false);
  };

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
            {/*<button onClick={() => deleteActivity(id)}>Delete This Activity</button>*/}
            <Button variant="outlined" color="primary" onClick={clickActivityForm}>
              Edit Activity
            </Button>
            <Dialog open={openActivityForm} onClose={closeActivityForm} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Edit Activity</DialogTitle>
              <DialogContent>
                <DialogContentText>
                Edit your activity here.
                </DialogContentText>
                <ActivityForm />
              </DialogContent>
              <DialogActions>
                <Button onClick={closeActivityForm} color="primary">
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
          <Grid item xs={12} sm={2}>
            {/* <Typography variant="h6">Column 5</Typography> */}
            {/* <Typography variant="subtitle1">Content for column 5</Typography> */}
            {/*<button onClick={() => deleteActivity(id)}>Delete This Activity</button>*/}
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
              Delete Activity
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Warning!</DialogTitle>
              <DialogContent>
                <DialogContentText>
                Are you sure you want to delete this activity?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button type="submit" variant="contained" color="primary" onClick={() => deleteActivity(id)}>
                  Delete
                </Button>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
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

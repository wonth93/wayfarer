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
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ActivityForm from "./ActivityForm";
import { Box } from "@material-ui/core";
import { DateTime } from "luxon";

const ActivityListItem = ({activity_name, activity_address, id, deleteActivity, activity_date, activity_cost, activity_time, activity_type}) => {
  const [open, setOpen] = React.useState(false);
  const [openActivityForm, setOpenActivityForm] = React.useState(false);

  // functions for handling form modal
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  console.log(activity_type)
  console.log(DateTime.fromSQL(activity_date).toFormat('LLL dd yyyy'))

  return (
    <Box sx={{ mb: '1rem' }}>
      <Card elevation={5} className="animated-card">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={2}>
            <Typography variant="subtitle1">{activity_date}</Typography>
            <Typography variant="subtitle1">{activity_time}</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1">{activity_name}</Typography>
            <Typography variant="overline">{activity_type}</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography>{activity_address}</Typography>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Typography variant="subtitle1">${activity_cost}</Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
              <DeleteForeverIcon />
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
    </Box>
  )
}

export default ActivityListItem;

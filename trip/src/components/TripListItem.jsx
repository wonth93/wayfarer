import React from 'react';
import { Link } from "react-router-dom";
import { useGlobalContext } from '../context';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const TripListItem = ({id, city, country, deleteTrip, departure_flight_date, return_flight_date}) => {
  //const { setTrip } = useGlobalContext();
  const [open, setOpen] = React.useState(false);

  // functions for handling form modal
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  console.log(city, country)
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6">Destination</Typography>
          <Link to={`/trips/${id}`}>{city}, {country}</Link></Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6">Departure Day</Typography>
          <Typography>{departure_flight_date}</Typography></Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6">Return Day</Typography>
          <Typography>{return_flight_date}</Typography></Grid>
        <Grid item xs={12} sm={3}>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Delete Trip
          </Button>
        </Grid>
      </Grid>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Warning!</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Are you sure you want to delete this trip?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button type="submit" variant="contained" color="primary" onClick={() => deleteTrip(id)}>
            Delete
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      {/*<Link to={'/'}><button onClick={() => deleteTrip(id)}>Delete This Trip</button></Link>*/}
    </div>
  )
}

export default TripListItem;
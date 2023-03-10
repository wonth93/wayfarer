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
import { makeStyles, Card, CardMedia, CardContent } from '@material-ui/core';
import { DateTime } from 'luxon';

const useStyles = makeStyles({
  root: {
    borderRadius: '10px',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
    marginTop: '20px',
  },
  media: {
    height: 0,
    paddingTop: '60%', //'56.25%', // 16:9
  },
});

const TripListItem = ({id, city, country, deleteTrip, departure_flight_date, return_flight_date, cover_photo_url, hotel_name, hotel_address}) => {
  const [open, setOpen] = React.useState(false);

  // functions for handling form modal
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  
  return (
    <>
      <Card className={[classes.root, "animated-card"]} elevation={3}>
      <Grid container>
      <Grid item xs={12} md={3}>
          <CardMedia
            className={classes.media}
            image={cover_photo_url ? cover_photo_url : "https://unsplash.com/photos/qyAka7W5uMY"}
            title="Image title"
          />
        </Grid>
        <Grid item xs={12} md={9}> 
        <CardContent>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6">Destination</Typography>
          <Typography>{city}, {country}</Typography>
          <Typography>{hotel_name}, {hotel_address}</Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography variant="h6">Departure Day</Typography>
          <Typography>{DateTime.fromSQL(departure_flight_date).toFormat('LLLL dd yyyy')}</Typography></Grid>
        <Grid item xs={12} sm={2}>
          <Typography variant="h6">Return Day</Typography>
          <Typography>{DateTime.fromSQL(return_flight_date).toFormat('LLLL dd yyyy')}</Typography></Grid>
        <Grid item xs={12} sm={3}>
        <Button variant='contained' color="primary" href={`/trips/${id}`}>
            View Trip Details
          </Button>
          {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Delete Trip
          </Button> */}
        </Grid>
        <Grid item xs={12} sm={2}>
        {/* <Button variant='contained' color="primary" href={`/trips/${id}`}>
            View Trip Details
          </Button> */}
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Delete Trip
          </Button>
        </Grid>
      </Grid>
      </CardContent>
      </Grid>
      </Grid>
      </Card>
      
      
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
    </>
  )
}

export default TripListItem;
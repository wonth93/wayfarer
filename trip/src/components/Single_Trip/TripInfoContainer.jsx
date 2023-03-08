import React from 'react';
import TripDetails from './TripsDetails'
import TripBudget from './TripBudget'
import WeatherData from './WeatherData';
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
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

const TripInfoContainer = ({trip, activities, deleteTrip}) => {
  const classes = useStyles();
  //console.log(props)
  return (
    <div>
      <Card className={classes.root} elevation={3}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <CardMedia
            className={classes.media}
            image={trip.cover_photo_url ? trip.cover_photo_url : "https://unsplash.com/photos/qyAka7W5uMY"}
            title="Image title"
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              Your trip to {trip.city}, {trip.country}
            </Typography>
            <Typography gutterBottom variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
            </Typography>
          <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            {/* Column 1 content */}
            <TripDetails trip={trip} />
          </Grid>
          <Grid item xs={12} md={4}>
            {/* Column 2 content */}
            <TripBudget trip={trip} activities={activities} />
          </Grid>
          <Grid item xs={12} md={4}>
            {/* Column 3 content */}
            <WeatherData trip={trip}/>
          </Grid>
        </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
      {/* <TripDetails trip={trip} />
      <TripBudget trip={trip} activities={activities} />
      <WeatherData trip={trip}/> */}
    </div>
  )
}

export default TripInfoContainer

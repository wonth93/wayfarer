import React, {useState, useEffect} from 'react'
import TripInfoContainer from "../components/SingleTripPage/Trip/TripInfoContainer"
import ActivityContainer from '../components/SingleTripPage/Activities/ActivityContainer';
import { RecommendationList } from '../components/SingleTripPage/Recommendations/RecommendationList';
import ActivityForm from '../components/SingleTripPage/Activities/ActivityForm';
import TripForm from '../components/Trips/TripForm';
import Map from '../components/SingleTripPage/Map';
import date from 'date-and-time';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, Container, Box, CircularProgress, Typography } from "@material-ui/core";

import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleTrip = () => {
  const {id} = useParams()
  const [loading, setLoading] = useState(false)
  const [trip, setTrip] = useState(null)
  const [activities, setActivities] = useState([])
  const [open, setOpen] = React.useState(false);
  const [openTripForm, setOpenTripForm] = React.useState(false);

 
  // functions for handling form modal
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const clickTripForm = () => {
    setOpenTripForm(true);
  };

  const closeTripForm = () => {
    setOpenTripForm(false);
  };

  //Load single trip info on render
  useEffect(() => {
    setLoading(true)
    async function getTrip() {
      try {
        const tripResponse = await fetch(`http://localhost:8080/api/trips/${id}`);
        const data = await tripResponse.json();
        console.log(data)
        if (data) {
        setTrip(data)
      } else {
        setTrip(null)
      }
      setLoading(false)
      } catch (error) {
        setLoading(false);
      }
    }
    getTrip()
  }, [id])

    // Load all activity data on render
    useEffect(() => {
      setLoading(true)
      async function getActivities() {
        try {
          const activitiesResponse = await fetch(`http://localhost:8080/api/activities/${id}`);
          const data = await activitiesResponse.json();
          console.log(data)
          if (data) {
          setActivities(data)
          } else {
          setActivities(null)
          }
          setLoading(false)
        } catch (error) {
          setLoading(false);
          }
      }
      getActivities()
    }, [setActivities])
  
    // Delete activitiy
    const deleteActivity = (id) => {
      axios
        .post(`http://localhost:8080/api/activities/delete`, {
          activity_id: id
        })
        .then((res) => {
          console.log(res)
          const deletedId = res.data.activities[0].id;
          return deletedId;
        })
        .then((deletedId) => {
          const updatedActivities = activities.filter((activity) => activity.id !== deletedId)
          setActivities(updatedActivities);
          setOpen(false);
        })
        .catch(err => console.log(err));
    }
  
    //Functionality to add an activity - pass this down to Activity Form as a prop so activities state is updated on submit
    const addActivity = (activityState) => { 
      axios
        .post("http://localhost:8080/api/activities/add", {
          user_id: activityState.user_id,
          trip_id: activityState.trip_id,
          activity_name: activityState.activity_name,
          activity_address: activityState.activity_address,
          lat: activityState.lat,
          long: activityState.long,
          activity_cost: activityState.activity_cost,
          activity_date: activityState.activity_date,
          activity_time: activityState.activity_time,   
          activity_type: activityState.activity_type  
        })
        .then((res) => {
          console.log(res)
          const newTrip = res.data.activities[0];
          return newTrip;
        })
        .then((newActivity) => {
          setActivities([...activities, newActivity]);
        })
        .catch(err => console.log(err));
    };

    const editTrip = (tripState) => {
      axios
        .post(`http://localhost:8080/api/trips/edit`, {
          user_id: tripState.user_id,
          city: tripState.city,
          country: tripState.country,
          hotel_name: tripState.hotel_name,
          hotel_address: tripState.hotel_address,
          hotel_cost: Number(tripState.hotel_cost),
          departure_flight_date: tripState.departure_flight_date,
          departure_flight_time: tripState.departure_flight_time,
          departure_flight_code: tripState.departure_flight_code,
          return_flight_date: tripState.return_flight_date,
          return_flight_time: tripState.return_flight_time,
          return_flight_code: tripState.return_flight_code,
          flight_cost: Number(tripState.flight_cost),
          cover_photo_url: tripState.cover_photo_url,
          trip_id: tripState.id
        })
        .then((res) => {
          console.log(res)
          const newTrip = res.data.trip[0];
          return newTrip;
        })
        .then((newTrip) => {
          setTrip([...trip, newTrip]);
        })
        .catch(err => console.log(err));
    }

  // Render components
  if (loading) {
    return (
      <div align="center"><CircularProgress /></div>
    )
  }

  if (!trip) {
    return (
      <div align="center"><CircularProgress /></div>
    )
  }

  return (
    <Container maxWidth="lg">
    {/* <div>Single Trip to {trip.city}, {trip.country}</div> */}
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TripInfoContainer trip={trip} activities={activities} />
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '10px'
          }}>
            <Button variant='contained' color="primary" onClick={clickTripForm}>
            Edit Trip Details
        </Button></Box>
      </Grid>
      <Grid item xs={12} md={7}>
        <ActivityContainer trip={trip} activities={activities} deleteActivity={deleteActivity} addActivity={addActivity} />
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '10px'
          }}>
            <Button variant='contained' color="primary" onClick={handleClickOpen}>
          Add an activitiy
        </Button></Box>
      </Grid>
      <Grid item xs={12} md={5}>
    
        <Map activities={activities} trip={trip} />
      </Grid>
      <Grid item xs={12}>
        <RecommendationList trip={trip} />
      </Grid>
    </Grid>

      <Dialog open={openTripForm} onClose={closeTripForm} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Trip Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit your trip here.
          </DialogContentText>
          <TripForm editTrip={editTrip} setTrip={setTrip} closeTripForm={closeTripForm} trip={trip}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeTripForm} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Activity</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a new activity here.
          </DialogContentText>
          <ActivityForm addActivity={addActivity} handleClose={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          {/* <Button onClick={handleClose} color="primary">
            Subscribe
          </Button> */}
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default SingleTrip;
import React, { useState } from "react";
import Geocode from "react-geocode";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { useGlobalContext } from "../../../context";
import axios from "axios";
import { useParams } from 'react-router-dom'

const ActivityForm = ({addActivity}) => {
  const { state } = useGlobalContext();
  const { id } = useParams()

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [cost, setCost] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("")
  const [type, setType] = useState("");

  const activityState = {
    user_id: state.user,
    trip_id: id,
    activity_name: name,
    activity_address: address,
    lat: 0,
    long: 0,
    activity_cost: cost,
    activity_date: date,
    activity_time: time,
    activity_type: type
  };

  //Getting lat and long from address
  const mapAPIkey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  Geocode.setApiKey(`${mapAPIkey}`);
  // Geocode.setApiKey(mapAPIkey);

  const getLat = async (address) => {
    try {
      const response = await Geocode.fromAddress(address);
      const { lat } = response.results[0].geometry.location;
      return lat;
    } catch (err) {
      console.log(err.message);
    }
  };

  const getLng = async (address) => {
    try {
      const response = await Geocode.fromAddress(address);
      const { lng } = response.results[0].geometry.location;
      return lng;
    } catch (err) {
      console.log(err.message);
    }
  };

  const addCoordinates = async (a) => {
    a.lat = await getLat(a.activity_address);
    a.long = await getLng(a.activity_address);
    return a;
  };

  // Functionality to create activity - eventually move and trigger re-render of activity list
  const createActivityAndSendToDb = async (activityInfo) => {
    const updatedActivityState = await addCoordinates(activityInfo)
    console.log(updatedActivityState)
    addActivity(updatedActivityState)
    //axios.post etc...
    //return axios
    // .put(`/api/activities/${}`)
  }

  // Function upon submitting form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, such as sending it to a server
    createActivityAndSendToDb(activityState)
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Activity Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Activity Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Activity Cost"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        type="number"
        fullWidth
        margin="normal"
      />
      <TextField
        id="date"
        label="Activity Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
    id="time"
    label="Activity Time"
    value={time}
    onChange={(e) => setTime(e.target.value)}
    type="time"
    InputLabelProps={{
      shrink: true,
    }}
    fullWidth
        margin="normal"
    inputProps={{
      step: 300, // 5 min
    }}
  />
      <TextField
        label="Activity Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default ActivityForm;
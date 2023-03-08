import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { useGlobalContext } from "../context";
import axios from "axios";
import { useParams } from 'react-router-dom'

const TripForm = ({addTrip, closeTripForm, editTrip, trip}) => {
  const { state } = useGlobalContext();

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [hotel, setHotel] = useState("");
  const [address, setAddress] = useState("");
  const [hotelCost, setHotelCost] = useState(0);
  const [departureFlightDate, setDepartureFlightDate] = useState("");
  const [departureFlightTime, setDepartureFlightTime] = useState("");
  const [departureFlightCode, setDepartureFlightCode] = useState("");
  const [returnFlightDate, setReturnFlightDate] = useState("");
  const [returnFlightTime, setReturnFlightTime] = useState("");
  const [returnFlightCode, setReturnFlightCode] = useState("");
  const [flightCost, setFlightCost] = useState(0);
  const [photo, setPhoto] = useState("");

  const tripState = {
    user_id: state.user,
    city: city,
    country: country,
    hotel_name: hotel,
    hotel_address: address,
    hotel_cost: hotelCost,
    departure_flight_date: departureFlightDate,
    departure_flight_time: departureFlightTime,
    departure_flight_code: departureFlightCode,
    return_flight_date: returnFlightDate,
    return_flight_time: returnFlightTime,
    return_flight_code: returnFlightCode,
    flight_cost: flightCost,
    cover_photo_url: photo
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addTrip(tripState);
  }

  return (
    <div>
      <button onClick={() => console.log(trip === undefined)}>test</button>
      <form onSubmit={handleSubmit}>
        <TextField
          label="City"
          defaultValue={(trip) ? trip.city : ""}
          // value={city}
          onChange={(e) => setCity(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Country"
          defaultValue={(trip) ? trip.country : ""}
          onChange={(e) => setCountry(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Hotel Name"
          defaultValue={(trip) ? trip.hotel_name : ""}
          onChange={(e) => setHotel(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Hotel Address"
          defaultValue={(trip) ? trip.hotel_address : ""}
          onChange={(e) => setAddress(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Hotel Cost"
          defaultValue={(trip) ? trip.hotel_cost : ""}
          onChange={(e) => setHotelCost(e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          type="number"
          fullWidth
          margin="normal"
        />
        <TextField
          id="date"
          label="Departure Flight Date"
          defaultValue={(trip) ? trip.departure_flight_date : ""}
          onChange={(e) => setDepartureFlightDate(e.target.value)}
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="time"
          label="Departure Flight Time"
          defaultValue={(trip) ? trip.departure_flight_time : ""}
          onChange={(e) => setDepartureFlightTime(e.target.value)}
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
          label="Departure Flight Code"
          defaultValue={(trip) ? trip.departure_flight_code : ""}
          onChange={(e) => setDepartureFlightCode(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          id="date"
          label="Return Flight Date"
          defaultValue={(trip) ? trip.return_flight_date : ""}
          onChange={(e) => setReturnFlightDate(e.target.value)}
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="time"
          label="Return Flight Time"
          defaultValue={(trip) ? trip.return_flight_time : ""}
          onChange={(e) => setReturnFlightTime(e.target.value)}
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
          label="Return Flight Code"
          defaultValue={(trip) ? trip.return_flight_code : ""}
          onChange={(e) => setReturnFlightCode(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Flight Cost"
          defaultValue={(trip) ? trip.flight_cost : ""}
          onChange={(e) => setFlightCost(e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          type="number"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Photo URL"
          defaultValue={(trip) ? trip.cover_photo_url : ""}
          onChange={(e) => setPhoto(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" onClick={closeTripForm}>
          Submit
        </Button>
      </form>
    </div>
  )
}

export default TripForm
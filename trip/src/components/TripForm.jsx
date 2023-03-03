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

const TripForm = ({addTrip}) => {
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
    <div>This is Trip Form
      <form onSubmit={handleSubmit}>
        <TextField
          label="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Hotel Name"
          value={hotel}
          onChange={(e) => setHotel(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Hotel Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Hotel Cost"
          value={hotelCost}
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
          value={departureFlightDate}
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
          value={departureFlightTime}
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
          value={departureFlightCode}
          onChange={(e) => setDepartureFlightCode(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          id="date"
          label="Return Flight Date"
          value={returnFlightDate}
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
          value={returnFlightTime}
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
          value={returnFlightCode}
          onChange={(e) => setReturnFlightCode(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Flight Cost"
          value={flightCost}
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
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default TripForm
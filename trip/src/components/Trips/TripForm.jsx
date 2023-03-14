import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { useGlobalContext } from "../../context";
import axios from "axios";
import { useParams } from 'react-router-dom'

const TripForm = ({addTrip, closeTripForm, editTrip, trip, setTrip}) => {
  const { state } = useGlobalContext();

  const [city, setCity] = useState(trip? trip.city : "");
  const [country, setCountry] = useState(trip? trip.country : "");
  const [hotel, setHotel] = useState(trip? trip.hotel_name : "");
  const [address, setAddress] = useState(trip? trip.hotel_address : "");
  const [hotelCost, setHotelCost] = useState(trip? trip.hotel_cost : 0);
  const [departureFlightDate, setDepartureFlightDate] = useState(trip? trip.departure_flight_date : "");
  const [departureFlightTime, setDepartureFlightTime] = useState(trip? trip.departure_flight_time : "");
  const [departureFlightCode, setDepartureFlightCode] = useState(trip? trip.departure_flight_code : "");
  const [returnFlightDate, setReturnFlightDate] = useState(trip? trip.return_flight_date : "");
  const [returnFlightTime, setReturnFlightTime] = useState(trip? trip.return_flight_time : "");
  const [returnFlightCode, setReturnFlightCode] = useState(trip? trip.return_flight_code : "");
  const [flightCost, setFlightCost] = useState(trip? trip.flight_cost : 0);
  const [photo, setPhoto] = useState(trip? trip.cover_photo_url : "");
  const [tripID, setTripID] = useState(trip? trip.id : null)

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
    cover_photo_url: photo,
    id: tripID
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (trip) {
      editTrip(tripState);
      setTrip(tripState)
    } else {
      addTrip(tripState);
    }
  }

  return (
    <div>
      {/* <button onClick={() => console.log(city)}>test</button> */}
      <form onSubmit={handleSubmit}>
        <TextField
          label="City"
          defaultValue={(trip) ? trip.city : ""}
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
          // inputProps={{
          //   step: 300, // 5 min
          // }}
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
          error={returnFlightDate < departureFlightDate && returnFlightDate ? true : false}
          helperText={returnFlightDate < departureFlightDate && returnFlightDate ? "Return flight date cannot be eariler than departure flight date!" : ""}
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
          // inputProps={{
          //   step: 300, // 5 min
          // }}
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
import React, { useState, useEffect, useCallback} from 'react'
import axios from 'axios';
import TripList from './TripList';
import TripForm from './TripForm';

const UserTripsContainer = () => {
  const [loading, setLoading] = useState(true)
  const [trips, setTrips] = useState([]);

  const fetchUserTrips = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/api/trips`);
      const data = await response.json();
      const { trips } = data;
      if (trips) {
        console.log(trips)
        setTrips(trips)
      } else {
        setTrips([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  }, [setTrips]);

  useEffect(() => {
    fetchUserTrips();
  }, [fetchUserTrips]);

  const addTrip = (tripState) => {
    axios
      .post("http://localhost:8080/api/trips/add", {
        user_id: tripState.user_id,
        city: tripState.city,
        country: tripState.country,
        hotel_name: tripState.hotel_name,
        hotel_address: tripState.hotel_address,
        hotel_cost: tripState.hotel_cost,
        departure_flight_date: tripState.departure_flight_date,
        departure_flight_time: tripState.departure_flight_time,
        departure_flight_code: tripState.departure_flight_code,
        return_flight_date: tripState.return_flight_date,
        return_flight_time: tripState.return_flight_time,
        return_flight_code: tripState.return_flight_code,
        flight_cost: tripState.flight_cost,
        cover_photo_url: tripState.cover_photo_url
      })
      .then((res) => {
        //console.log(res.data)
        const newTrip = res.data.trip[0];
        return newTrip;
      })
      .then((newTrip) => {
        setTrips([...trips, newTrip]);
      })
      .catch(err => console.log(err));
  }

  const editTrip = (tripState, id) => {
    axios
      .post(`http://localhost:8080/api/trips/${id}/edit`, {
        user_id: tripState.user_id,
        city: tripState.city,
        country: tripState.country,
        hotel_name: tripState.hotel_name,
        hotel_address: tripState.hotel_address,
        hotel_cost: tripState.hotel_cost,
        departure_flight_date: tripState.departure_flight_date,
        departure_flight_time: tripState.departure_flight_time,
        departure_flight_code: tripState.departure_flight_code,
        return_flight_date: tripState.return_flight_date,
        return_flight_time: tripState.return_flight_time,
        return_flight_code: tripState.return_flight_code,
        flight_cost: tripState.flight_cost,
        cover_photo_url: tripState.cover_photo_url,
        trip_id: id
      })
      .then((res) => {
        //console.log(res.data)
        const newTrip = res.data.trip[0];
        return newTrip;
      })
      .then((newTrip) => {
        setTrips([...trips, newTrip]);
      })
      .catch(err => console.log(err));
  }

  const deleteTrip = (id) => {
    return axios
      .post(`http://localhost:8080/api/trips/${id}/delete`, {
        trip_id: id
      })
      .then((res) => {
        setTrips([...trips]);
      })
      .catch(err => console.log(err))
  }

  return (
    <div>UserTripsContainer
      <TripList trips={trips} deleteTrip={deleteTrip} editTrip={editTrip}/>
      <TripForm addTrip={addTrip}/>
    </div>
  )
}

export default UserTripsContainer
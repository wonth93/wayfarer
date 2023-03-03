import React, { useState, useEffect } from 'react'
import Welcome from "../components/Welcome"
import TripList from '../components/TripList'
import TripForm from '../components/TripForm'
import { useGlobalContext } from '../context'
import axios from 'axios'
import UserTripsContainer from '../components/UserTripsContainer'


const Home = () => {

  const { state, userTrips } = useGlobalContext();

  // const [loading, setLoading] = useState(false)
  // const [trips, setTrips] = useState([]);


  // // for one user only
  // useEffect(() => {
  //   setLoading(true)
  //   async function getTrips() {
  //     try {
  //       const tripResponse = await fetch(`http://localhost:8080/api/trips`);
  //       const data = await tripResponse.json();
  //       if (data) {
  //         setTrips(data);
  //       } else {
  //         setTrips([]);
  //       }
  //       setLoading(false)
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false)
  //     }
  //   }
  //   getTrips();
  // }, [setTrips]);

  // const addTrip = (tripState) => {
  //   axios
  //     .post("http://localhost:8080/api/trips/add", {
  //       user_id: tripState.user_id,
  //       city: tripState.city,
  //       country: tripState.country,
  //       hotel_name: tripState.hotel_name,
  //       hotel_address: tripState.hotel_address,
  //       hotel_cost: tripState.hotel_cost,
  //       departure_flight_date: tripState.departure_flight_date,
  //       departure_flight_time: tripState.departure_flight_time,
  //       departure_flight_code: tripState.departure_flight_code,
  //       return_flight_date: tripState.return_flight_date,
  //       return_flight_time: tripState.return_flight_time,
  //       return_flight_code: tripState.return_flight_code,
  //       flight_cost: tripState.flight_cost,
  //       cover_photo_url: tripState.cover_photo_url
  //     })
  //     .then((res) => {
  //       const newTrip = res.data.trips[0];
  //       return newTrip;
  //     })
  //     .then((newTrip) => {
  //       setTrips([...trips, newTrip]);
  //     })
  //     .catch(err => console.log(err));
  // }

  return (
    <>
      <div>Home @ Home.jsx
      {!state.user && <Welcome />}
      {/* {userTrips > 0 && <TripList trips={trips}/>} */}
      {state.user && <UserTripsContainer />}
      </div>
    </>
  )
}

export default Home;
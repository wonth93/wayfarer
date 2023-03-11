import React, { useState, useContext, useEffect } from "react";
import Cookies from "universal-cookie";
import { redirect } from "react-router-dom";
import axios from "axios";
import Geocode from "react-geocode";
import {
  getUserFromUsers,
  getAllTripsForUser,
  getAllActivitiesForTrip,
  getTripFromTrips,
} from "./helpers/selectors";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const cookies = new Cookies();

  //Setting up global app state
  const [state, setState] = useState({
    trips: [],
    users: [],
    activities: [],
    user: cookies.get("user_id"),
    tripId: "",
    trip: {},
  });
  const [userTrips, setUserTrips] = useState([]);

  // Calling all the data and setting application state
  useEffect(() => {
    Promise.all([
      axios.get("/api/trips"),
      axios.get("/api/users"),
      axios.get("/api/activities"),
    ]).then(([trips, users, activities]) => {
      setState((prev) => ({
        ...prev,
        trips: trips.data.trips,
        users: users.data.users,
        activities: activities.data.activities,
      }));
      setUserTrips([...trips.data.trips]);
    });
  }, []);

  //////// User Functionality ////////

  //Login function
  const login = () => {
    cookies.set("user_id", 1, { path: "/" });
    setState((prev) => ({
      ...prev,
      user: cookies.get("user_id"),
    }));
  };

  //Logout function
  const logout = () => {
    cookies.remove("user_id", { path: "/" });
    setState((prev) => ({
      ...prev,
      user: "",
    }));
  };

  // Logged In User
  const loggedUser = getUserFromUsers(state.users, state.user);

  //////// Trip Functionality ////////
  //const userTrips = getAllTripsForUser(state.trips, state.user);

  // const setTrip = (tripId) => setState({ ...state, tripId });

  // const singleTrip = getTripFromTrips(state.trips, state.tripId);

  // Activity Functionality
  const userActivities = getAllActivitiesForTrip(
    state.activities,
    state.tripId
  );

  ////////

  const [recs, setRecs] = useState([]);
  const [city, setCity] = useState({});
  // const [type, setType] = useState("restaurants")
  // const [loading, setLoading] = useState(false) ?

  const mapAPIkey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  Geocode.setApiKey(`${mapAPIkey}`);

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

  const getAndSetCityCoordinates = async (city) => {
    setCity({
      lat: await getLat(city),
      lng: await getLng(city),
    });
  };

  const getRecsData = async (lat, lng) => {
    try {
      const {
        data: { data },
      } = await axios.get(
        `https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng`,
        {
          params: {
            longitude: lng,
            latitude: lat,
            lunit: "km",
            currency: "USD",
            limit: "30",
            lang: "en_US",
            offset: "5",
          },
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
            "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
          },
        }
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  //   city.lat && city.lng && getRecsData(city.lat, city.lng)
  //     .then((data) => {
  //       console.log(data)
  //       setRecs(data)
  //       setLoading(false)
  //   })
  // }

  //   useEffect(() => {
  //     const getAndSetCityCoordinates = async (city) => {
  //       setCity({
  //         lat: await getLat(city),
  //         lng: await getLng(city),
  //       });
  //     };
  //     getAndSetCityCoordinates(trip.city);
  //   }, [])

  //   useEffect(() => {
  //     setLoading(true)
  //     const getRecsData = async (lat, lng) => {
  //       try {
  //         const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng`, {
  //           params: {
  //             longitude: lng,
  //             latitude: lat,
  //             lunit: 'km',
  //             currency: 'USD',
  //             limit: '30',
  //             lang: 'en_US',
  //             offset: '5'
  //           },
  //           headers: {
  //             'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  //             'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  //           }
  //         });
  //         return data;
  //       } catch (error) {
  //         console.log(error)
  //       }
  //     }

  //     city.lat && city.lng && getRecsData(city.lat, city.lng)
  //       .then((data) => {
  //         console.log(data)
  //         setRecs(data)
  //         setLoading(false)
  //     })
  //   }, [city])

  return (
    <AppContext.Provider
      value={{
        state,
        login,
        logout,
        loggedUser,
        userTrips,
        setUserTrips,
        userActivities,
        getAndSetCityCoordinates,
        getRecsData,
        recs,
        setRecs,
        // setTrip,
        // singleTrip,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

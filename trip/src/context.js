import React, { useState, useContext, useEffect } from "react";
import Cookies from "universal-cookie";
import { redirect } from "react-router-dom";
import axios from "axios";
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
  const userTrips = getAllTripsForUser(state.trips, state.user);

  const setTrip = (tripId) => setState({ ...state, tripId });

  const singleTrip = getTripFromTrips(state.trips, state.tripId);

  // Activity Functionality
  const userActivities = getAllActivitiesForTrip(
    state.activities,
    state.tripId
  );

  return (
    <AppContext.Provider
      value={{
        state,
        login,
        logout,
        loggedUser,
        userTrips,
        userActivities,
        setTrip,
        singleTrip,
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

import React, { useState, useContext, useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { getUserFromUsers, getAllTripsForUser, getAllActivitiesForUser } from "./helpers/selectors";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const cookies = new Cookies();

  //Setting up app state
  const [state, setState] = useState({
    trips: [],
    users: [],
    activities: [],
    user: cookies.get("user_id"),
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

  // Activity Functionality
  const userActivities = getAllActivitiesForUser(state.activities, 1);

  //test
  const [message, setMessage] = useState("Click the button to load data!");
  const [userid, setUserid] = useState(1);
  const [loggedin, setLoggedin] = useState(false);

  //Sample
  const fetchData = () => {
    axios.get("/api/trips").then((response) => {
      console.log(response.data);
      console.log(response.data.message);
      setMessage(response.data.message);
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        message,
        fetchData,
        login,
        logout,
        loggedUser,
        loggedin,
        setLoggedin,
        userid,
        setUserid,
        userTrips,
        userActivities,
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

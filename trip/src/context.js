import React, { useState, useContext, useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

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

  //Login function
  const login = () => {
    cookies.set("user_id", 2, { path: "/" });
    setState({
      user: cookies.get("user_id"),
    });
  };

  //Logout function
  const logout = () => {
    cookies.remove("user_id", { path: "/" });
    setState({
      user: "",
    });
  };

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
        species: activities.data.activities,
      }));
    });
  }, []);

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

  // //Login function
  // const login = () => {
  //   axios.get(`${url}api/users/login/${userid}`).then((response) => {
  //     console.log(response.data);
  //     if (response.data === "Success") {
  //       setLoggedin(true);
  //     }
  //   });
  // };

  return (
    <AppContext.Provider
      value={{
        state,
        message,
        fetchData,
        login,
        logout,
        loggedin,
        setLoggedin,
        userid,
        setUserid,
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

import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const url = "http://localhost:8080/";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [message, setMessage] = useState("Click the button to load data!");
  const [userid, setUserid] = useState(1);
  const [loggedin, setLoggedin] = useState(false);

  const fetchData = () => {
    axios.get("/api/users").then((response) => {
      console.log(response.data);
      console.log(response.data.message);
      setMessage(response.data.message);
    });
  };

  const login = () => {
    axios.get(`${url}api/users/login/${userid}`).then((response) => {
      console.log(response.data);
      if (response.data === "Success") {
        setLoggedin(true);
      }
    });
  };

  return (
    <AppContext.Provider
      value={{
        message,
        fetchData,
        login,
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

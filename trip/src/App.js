import React, { useState, Component } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import TripList from "./components/TripList";
import { useGlobalContext } from "./context";

function App() {
  // const [message, setMessage] = useState("Click the button to load data!");
  // const [userid, setUserid] = useState(1)
  // const [loggedin, setLoggedin] = useState(false);

  // const fetchData = () => {
  //   axios.get("/api/users").then((response) => {
  //     console.log(response.data);
  //     console.log(response.data.message);
  //     setMessage(response.data.message);
  //   });
  // };

  // const login = () => {
  //   axios.get(`http://localhost:8080/api/users/login/${userid}`).then((response) => {
  //     console.log(response.data);
  //     if(response.data === "Success") {
  //       setLoggedin(true);
  //     }
  //   });
  // }
  const { message, fetchData, loggedin, login } = useGlobalContext();

  return (
    <div className="App">
      <Navbar />
      <h1>{message}</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {!loggedin && <button onClick={login}>Login</button>}
      {loggedin && <button>Logout</button>}
      <TripList />
    </div>
  );
}

export default App;

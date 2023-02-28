import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TripList from "./components/TripList";
import Cookies from "universal-cookie";
import { useGlobalContext } from "./context";
import axios from "axios";

function App() {
  const { message, fetchData, state, login, logout } = useGlobalContext();

  return (
    <div className="App">
      <Navbar />
      <h1>{message}</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {!state.user && <button onClick={login}>Login</button>}
      {state.user && <button onClick={logout}>Logout</button>}
      <TripList />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TripList from "./components/TripList";
import Welcome from "./components/Welcome";
import { useGlobalContext } from "./context";

function App() {
  const { state, login, logout } = useGlobalContext();

  return (
    <div className="App">
      <Navbar />
      {!state.user && (
        <>
          <button onClick={login}>Login</button>
          <Welcome />
        </>
      )}
      {state.user && (
        <>
          <button onClick={logout}>Logout</button>
          <TripList />
        </>
      )}
    </div>
  );
}

export default App;

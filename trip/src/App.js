import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TripList from "./components/TripList";
import { useGlobalContext } from "./context";

function App() {
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

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SingleTrip from "./pages/SingleTrip";
import { useGlobalContext } from "./context";

function App() {
  const { state } = useGlobalContext();

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trips/:trip_id" element={<SingleTrip />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

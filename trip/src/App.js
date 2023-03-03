import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SingleTrip from "./pages/SingleTrip";
import Map from "./components/Single_Trip/Activities/Map";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trips/:id" element={<SingleTrip />} />
          <Route path="/testMap" element={<Map />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

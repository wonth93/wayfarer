import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SingleTrip from "./pages/SingleTrip";
import TestMap from "./pages/TestMap";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trips/:id" element={<SingleTrip />} />
          <Route path="/testMap" element={<TestMap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

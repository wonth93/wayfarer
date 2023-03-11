import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SingleTrip from "./pages/SingleTrip";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trips/:id" element={<SingleTrip />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

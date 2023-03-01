import axios from "axios";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../../context";

import React from 'react'

const WeatherData = () => {
  const { singleTrip } = useGlobalContext();
  if (!singleTrip) return (
    <p>No trip weather!</p>
  )

  const apiKey = "";
  const [weatherData, setWeatherData] = useState([{}])

  useEffect(() => {
    axios.get("https://api.openweathermap.org/data/2.5/weather?")
  }, []);

  return (
    <div>WeatherData</div>
  )
}

export default WeatherData
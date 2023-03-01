import axios from "axios";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../../context";

import React from 'react'

const WeatherData = () => {
  const { singleTrip } = useGlobalContext();
  if (!singleTrip) return (
    <p>No trip weather!</p>
  )

  const apiKey = "42d081443b7676262a361d1f9d415d4d";
  const [weatherData, setWeatherData] = useState([{}])
  const { city } = singleTrip

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?${city}&appid=${apiKey}`)
  }, []);

  return (
    <div>WeatherData</div>
  )
}

export default WeatherData
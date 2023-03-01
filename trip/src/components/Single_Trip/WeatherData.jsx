import axios from "axios";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../../context";

import React from 'react'

const WeatherData = () => {
  const { singleTrip } = useGlobalContext();
  if (!singleTrip) return (
    <p>No trip weather!</p>
  )

  const apiKey = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;

  const [weatherData, setWeatherData] = useState({})
  const { city } = singleTrip

  const getWeatherData = async (city, apiKey) => {
    try {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      //console.log(data.weather[0])
      return data.weather[0];
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getWeatherData(city, apiKey).then((data) => {
      setWeatherData(data)
    })
  }, [])
  if (!weatherData) return (
    <p>Could not get latest weather data</p>
  )

  return (
    <div>
      <p>Current weather: {weatherData.description}</p>
    </div>
  )
}

export default WeatherData
import axios from "axios";
import { useState, useEffect } from "react";
import { Typography, Box } from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CloudIcon from '@material-ui/icons/Cloud';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

import React from 'react'

const WeatherData = ({trip}) => {

  const apiKey = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;
  // const [loading, setLoading] = useState(false)
  const [weatherData, setWeatherData] = useState({ temp: 0, feelsLike: 0, desc: "", high: 0, low: 0 })
  const { city } = trip

  // const getWeatherData = async (city, apiKey) => {
  //   try {
  //     const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
  //     console.log(data)
  //     // return data.weather[0];
  //     return data
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    // setLoading(true)
    const getWeatherData = async (city, apiKey) => {
      try {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        console.log(data)
        // return data.weather[0];
        return data
      } catch (error) {
        console.log(error)
      }
    }

    getWeatherData(city, apiKey).then((data) => {
      setWeatherData({
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        desc: data.weather[0].description,
        high: data.main.temp_max,
        low: data.main.temp_min
      })
    })
  }, [])
  // if (loading) return (
  //   <p>Could not get latest weather data</p>
  // )

  return (
    <div>
        <Typography variant="h6">{trip.city} Weather</Typography>
        <Box display="flex" alignItems="center"><CloudIcon /><Typography variant="subtitle1">Current Weather: {weatherData.desc}</Typography></Box>
        <Box display="flex" alignItems="center"><WbSunnyIcon /><Typography variant="subtitle1">Current Temp: {weatherData.temp}</Typography></Box>
        <Box display="flex" alignItems="center"><WhatshotIcon /><Typography variant="subtitle1">Today's High: {weatherData.high}</Typography></Box>
        <Box display="flex" alignItems="center"><AcUnitIcon /><Typography variant="subtitle1">Today's Low: {weatherData.low}</Typography></Box>
    </div>
  )
}

export default WeatherData
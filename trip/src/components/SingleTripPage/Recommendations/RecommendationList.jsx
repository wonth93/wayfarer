import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Geocode from "react-geocode";
import RecommendationListItem from './RecommendationListItem';
import { Grid, Typography } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';

export const RecommendationList = ({trip}) => {
const [recs, setRecs] = useState([])
const [city, setCity] = useState({})
const [loading, setLoading] = useState(false)

  const mapAPIkey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  Geocode.setApiKey(`${mapAPIkey}`);

  const getLat = async (address) => {
    try {
      const response = await Geocode.fromAddress(address);
      const { lat } = response.results[0].geometry.location;
      return lat;
    } catch (err) {
      console.log(err.message);
    }
  };

  const getLng = async (address) => {
    try {
      const response = await Geocode.fromAddress(address);
      const { lng } = response.results[0].geometry.location;
      return lng;
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const getAndSetCityCoordinates = async (city) => {
      setCity({
        lat: await getLat(city),
        lng: await getLng(city),
      });
    };
    getAndSetCityCoordinates(trip.city);
  }, [])

  useEffect(() => {
    setLoading(true)
    const getRecsData = async (lat, lng) => {
      try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng`, {
          params: {
            longitude: lng,
            latitude: lat,
            lunit: 'km',
            currency: 'USD',
            limit: '30',
            lang: 'en_US',
            offset: '5'
          },
          headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;
      } catch (error) {
        console.log(error)
      }
    }

    city.lat && city.lng && getRecsData(city.lat, city.lng)
      .then((data) => {
        console.log(data)
        setRecs(data)
        setLoading(false)
    })
  }, [city])
  
  if (loading) return (<div align="center"><CircularProgress /></div>)

  if (!recs) return null;

  return (<div>
    <Typography gutterBottom align="center" variant="h2">Need recommendations for places to visit in {trip.city}?</Typography>
    <Grid container spacing={2}>
    {recs.filter((rec) => rec.name && rec.address).map((rec) => {
       return (
        <Grid item xs={12} sm={6} md={4}>
          <RecommendationListItem key={parseInt(Math.random() * 1000)} rec={rec}/>
        </Grid>
      )
    })}
    </Grid>
  </div>)
}

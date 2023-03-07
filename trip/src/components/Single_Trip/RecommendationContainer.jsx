import React, {useEffect, useState} from 'react'
import axios from 'axios'

export const RecommendationContainer = ({trip}) => {
  const [recs, setRecs] = useState([])

  // const URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/output?keyword=${trip.city}`
  const URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/output?keyword=${trip.hotel_address}`
  
  const getPlacesData = async () => {
    try {
      const { data: { data } } = await axios.get(URL);
      return data;
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getPlacesData()
      .then((data) => {
        console.log(data)
        setRecs(data)
    })
  }, [])

  return (
    <div>RecommendationContainer</div>
  )
}

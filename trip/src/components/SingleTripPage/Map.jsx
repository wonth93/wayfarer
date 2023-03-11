import React, {useState, useEffect} from 'react'
import { GoogleMap, Marker, useJsApiLoader, InfoWindow } from '@react-google-maps/api';
import Geocode from "react-geocode";
import { Box, Typography } from '@material-ui/core';

function Map({activities, trip}) {
  const containerStyle = {
    width: '500px',
    height: '400px'
  };
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
  })

  const mapAPIkey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  Geocode.setApiKey(`${mapAPIkey}`);

  const [map, setMap] = useState(null)
  const [city, setCity] = useState({ lat: 0, lng: 0 })
  const [hotel, setHotel] = useState({ lat: 0, lng: 0 })
  const [markers, setMarkers] = useState([{ address: "", lat: 0, lng: 0 }]);
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const onLoad = React.useCallback(function callback(map) {

    const getAndSetCityCoordinates = async (location) => {
      setCity({
        lat: await getLat(location),
        lng: await getLng(location),
      });
    };

    const getAndSetHotelCoordinates = async (address) => {
      setHotel({
        lat: await getLat(address),
        lng: await getLng(address),
      });
    };
    getAndSetCityCoordinates(trip.city);
    getAndSetHotelCoordinates(trip.hotel_address)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  // Getting lng and lat from activities 
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

    if (activities.length > 0) {
      setMarkers(activities)
    }

  }, [activities]);

  return isLoaded ? (
      <>
      <Typography gutterBottom align="center" variant="h2">Your activities map</Typography>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={city}
        zoom={11}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={{ lat: Number(marker.lat), lng: Number(marker.long) }}
            onClick={() => handleActiveMarker(marker.id)}
          >
            {activeMarker === marker.id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <>
              <div>{marker.activity_name}</div>
              <div>{marker.activity_address}</div>
              <div>{marker.activity_date}, {marker.activity_time}</div>
              </>
            </InfoWindow>
          ) : null}
          </Marker>
        ))}
        {hotel.lat && hotel.lng && 
        <><Marker position={hotel} label={"Hotel"}>
          </Marker></>}
      </GoogleMap>
      </Box>
      </>
  ) : <Typography gutterBottom align="center" variant="h2">Loading activities map...</Typography>
}

export default React.memo(Map)
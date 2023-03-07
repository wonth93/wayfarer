import React, {useState, useEffect} from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import Geocode from "react-geocode";

function Map({activities, trip}) {
  const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
  })

  const mapAPIkey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;
  Geocode.setApiKey(`${mapAPIkey}`);

  const [map, setMap] = React.useState(null)
  const [city, setCity] = useState({ lat: 0, lng: 0 })
  const [hotel, setHotel] = useState({ lat: 0, lng: 0 })
  const [markers, setMarkers] = useState([{ address: "", lat: 0, lng: 0 }]);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    const getAndSetCityCoordinates = async (location) => {
      setCity({
        lat: await getLat(location),
        lng: await getLng(location),
      });
    };
    getAndSetCityCoordinates(trip.city);

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
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={city}
        zoom={11}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        {markers.map((marker) => (
          <Marker
            key={Math.random()}
            position={{ lat: Number(marker.lat), lng: Number(marker.long) }}
            label={marker.activity_name}
          ></Marker>
        ))}
        <Marker 
          position={city}
          label={trip.city}
          ></Marker>
        {hotel.lat && hotel.lng && <Marker position={hotel} label={"Hotel"}></Marker>}
        <></>
      </GoogleMap>
  ) : <>Loading Maps</>
}

export default React.memo(Map)
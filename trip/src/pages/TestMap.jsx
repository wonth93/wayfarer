// import React from 'react'
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

// // const TestHome = () => {
// //   const { isLoaded, loadError } = useLoadScript({
// //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
// //   });

// //   if (loadError) return <>'Error loading maps'</>;
// //   if (!isLoaded) return <>'Loading maps'</>;
// //   return <TestMap />

// // }

// const TestMap = () => {

//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
//   });

//   if (loadError) return <>'Error loading maps'</>;
//   if (!isLoaded) return <>'Loading maps'</>;

//   const containerStyle = {
//     width: "800px",
//     height: "800px",
//   };
//   const center = {
//     lat: 40,
//     lng: -123,
//   };

//   return (
//     <div id="map">
//       <GoogleMap mapContainerClassName={containerStyle} center={center} zoom={10}>
//         {/* {markers.map((marker) => (
//           <Marker
//             key={marker.lat}
//             position={{ lat: marker.lat, lng: marker.lng }}
//           ></Marker>
//         ))} */}
//         <Marker position={{ lat: -40, lng: -123 }}></Marker>
//       </GoogleMap>
//     </div>
//   )
// }

// export default TestMap

import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '800px',
  height: '800px'
};

const center = {
  lat: 49.246292,
  lng: -123.116226
};

function TestMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={center}></Marker>
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(TestMap)

import React, { useRef, useEffect, useState } from 'react';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';


// import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';

 

mapboxgl.accessToken = 'pk.eyJ1IjoiYWhtZWQxNjMiLCJhIjoiY2ttYzdidXFtMjdubDJvcXRlc3R3d296ZiJ9.9Y44ZpiC3c6zWyxLTqQUQw';
// mapboxgl.workerClass = MapboxWorker;
export default function Location() {
//    const currentLocation= navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
//     enableHighAccuracy: true
//   })
  
//   function successLocation(position) {
//     setupMap([position.coords.longitude, position.coords.latitude])
//   }
  
//   function errorLocation() {
//     setupMap([-2.24, 53.48])
//   }
  
//   function setupMap(center) {
//     const map = new mapboxgl.Map({
//       container: "map",
//       style: "mapbox://styles/mapbox/streets-v11",
//       center: center,
//       zoom: 15
   // })
 
   const mapContainer = useRef();
const [lng, setLng] = useState(10);
const [lat, setLat] = useState(80);
const [zoom, setZoom] = useState(2);
useEffect(() => {
    const map = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom
    });
    map.on('move', () => {
        setLng(map.getCenter().lng.toFixed(4));
        setLat(map.getCenter().lat.toFixed(4));
        setZoom(map.getZoom().toFixed(2));
        })
    return () => map.remove();
  
  
    }, []);

  
//     const nav = new mapboxgl.NavigationControl()
//     map.addControl(nav)
  
//     // var directions = new MapboxDirections({
//     //   accessToken: mapboxgl.accessToken
//     // })
  
//     map.addControl(directions, "top-left")
 //}
    return (
        <div>
            {/* {currentLocation} */}
            <div>
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>
            <div className="map-container" ref={mapContainer} />
        </div>
        </div>
    )
}

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';


// mapboxgl.workerClass = MapboxWorker;
// mapboxgl.accessToken = 'pk.eyJ1IjoiYWhtZWQxNjMiLCJhIjoiY2ttYzdidXFtMjdubDJvcXRlc3R3d296ZiJ9.9Y44ZpiC3c6zWyxLTqQUQw';

// mapboxgl.workerClass = MapboxWorker; // Wire up loaded worker to be used instead of the default
// let map = new mapboxgl.Map({
//     container: 'map', // container ID
//      style: 'mapbox://styles/mapbox/streets-v11', // style URL
//     center: [-74.5, 40], // starting position [lng, lat]
//     zoom: 9 // starting zoom
// });
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

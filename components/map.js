import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const key = 'AIzaSyAkEjSeRd7iRIiijLsjXKM4sag8bOAh9Hg'

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: '100%', width: '100%' }} />,
    containerElement: <div style={{ height: '100%', width: '100%' }} />,
    mapElement: <div style={{ height: '100%', width: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={{ lat: props.lat, lng: props.lng }}>
    {props.showMarker && <Marker position={{ lat: props.lat, lng: props.lng }} title='Tartu Linna Asutus Varjupaik' />}
    <style>{`
      .gm-style-pbt {
        text-align: center;
      }
    `}</style>
  </GoogleMap>
);

export default Map;

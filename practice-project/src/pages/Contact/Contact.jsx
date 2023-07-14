import React, { Component } from 'react'
import { GoogleMap, withGoogleMap, withScriptjs, Marker } from 'react-google-maps';

export default class Contact extends Component {
  
  render() {
    const MapComponent = withScriptjs(withGoogleMap(() => (
      <GoogleMap
        defaultZoom={100}
        defaultCenter={{ lat: 12.911613, lng: 77.585883 }} 
      >
        <Marker position={{ lat: 12.911613, lng: 77.585883 }} /> 
      </GoogleMap>
    )));
    return (
      <div style={{ width: '100%', height: '400px' }}> 
      <MapComponent
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyD5d3pmMBCPCwdxRb1X4lk_a-U4WdlNF4U`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
    
  }
}







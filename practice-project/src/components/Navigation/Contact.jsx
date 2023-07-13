import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Contact extends Component {
  
  render() {
    const defaultProps = {
      center: {
        lat: 12.9119,
        lng: 77.5859
      },
      zoom: 11
    };
    return (
      <div style={{ height: '50vh', width: '40%',margin : "3rem auto",borderRadius: "8px"}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={12.9119}
          lng={77.5859}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
    
  }
}







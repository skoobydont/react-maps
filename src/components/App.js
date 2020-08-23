import React from 'react';
import './App.css';
import { withGoogleMap, GoogleMap, withScriptjs } from 'react-google-maps';

const Map = () => {
    return(
        <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: 36.2254975, lng: -84.0972329 }}
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const App = () => {

  return (
    <div className="App" style={{ width: '100vw', height: '100vw'}}>
      Map Section
      <WrappedMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_API_KEY}`}
        loadingElement={<div style={{ height: "100%"}}/>}
        containerElement={<div style={{ height: "100%"}}/>}
        mapElement={<div style={{ height: "100%"}}/>}        
      />
    </div>
  );
}

export default App;

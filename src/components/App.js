import React, { useState, useEffect } from 'react';
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
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(process.env.NODE_ENV === "production") {
      setApiKey(process.env.REACT_APP_API_KEY);
      setLoading(false);
    }
  }, []);

  return (
    <div className="App" style={{ width: '100vw', height: '100vw'}}>
      Map Section
    { !loading 
      ? <WrappedMap 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`}
          loadingElement={<div style={{ height: "100%"}}/>}
          containerElement={<div style={{ height: "100%"}}/>}
          mapElement={<div style={{ height: "100%"}}/>}        
        />
      : 'Loading'
    }
    </div>
  );
}

export default App;

import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

const Map = withGoogleMap(props => {
    console.log('props', props)
    return(
        <div>
            <GoogleMap
                defaultCenter = { { lat: 40, lng: -70 }}
                defaultZoom = { 13 }
                containerElement={ <div style={{height: '500px', width: '500px'}} /> }
                mapElement={ <div style={{height: '100%'}} /> }
                >
            </GoogleMap>
        </div>

    );
});

export default Map;
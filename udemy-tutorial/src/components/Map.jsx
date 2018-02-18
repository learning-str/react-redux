import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

import '../style/Map.css';

const InnerMap = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
  </GoogleMap>
);

const Map = props => (
  <InnerMap
    containerElement={(<div />)}
    mapElement={(<div class='test'/>)}
  />
)

export default Map

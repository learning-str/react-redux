import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import PropTypes from 'prop-types'

import '../style/Map.css';

const InnerMap = withGoogleMap(({ location, marker }) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={location}
    center={location}
  >
    <Marker {...marker}/>
  </GoogleMap>
);

const Map = ({ location }) => (
  <InnerMap
    containerElement={(<div />)}
    mapElement={(<div className='map'/>)}
    location={location}
    marker={{ position: location }}
  />
)


Map.propTypes = {
  location: PropTypes.objectOf(PropTypes.number).isRequired,
}

export default Map

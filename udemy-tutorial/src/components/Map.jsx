import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import PropTypes from 'prop-types'

import '../style/Map.css';

const InnerMap = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={props.poition}
    center={props.position}
  >
    <Marker {...props.marker}/>
  </GoogleMap>
);

const Map = ({ lat, lng }) => {
  const position = { lat, lng }
  return (
    <InnerMap
      containerElement={(<div />)}
      mapElement={(<div className='map'/>)}
      position={position}
      marker={{ position }}
    />
  )
}

Map.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
}

Map.defaultProps = {
  lat: 35.6585805,
  lng: 139.7454329,
}

export default Map

import React from 'react'
import GoogleMapReact from 'google-map-react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/material';


const Mapnavigation = ({setCoordinates,setBounds,coordinates}) => {
  console.log("coordinate data from map : "+ coordinates )
  console.log(coordinates)
  const isMobile = useMediaQuery('(min-width:600px)');
  return (
    <div>
      <Box sx={{ height: '85vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={12}
          margin={[50, 50, 50, 50]}
          options={''}
          onChange={(e) => {
            console.log(e)
            setCoordinates({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
          onChildClick={''}   
        >
        </GoogleMapReact>
      </Box>
      </div>
  )
}

export default Mapnavigation
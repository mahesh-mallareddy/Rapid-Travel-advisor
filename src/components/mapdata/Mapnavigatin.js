import GoogleMapReact from 'google-map-react';
// import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Paper, Typography, Rating, useMediaQuery } from '@mui/material';
import LocationOnOutlineIcon from '@mui/icons-material/LocationOnOutlined';
// import type { TypeMapProps } from '../@types';
import styles from './Mapstyles.module.css';

const Mapnavigation = ({ setCoordinates, setBounds, coordinates, traveldata ,setChildClicked}) => {
  const isDesktop = useMediaQuery('(min-width: 600px');

  console.log("coordinate data from map : " + coordinates)
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
          onChildClick={(child) => {
            setChildClicked(child);
          }}
        >
          {
            traveldata?.map((place, index) => {
              const lat = place.latitude;
              const lng = place.longitude;
              // const rating = place.rating;
              if (lat && lng) {
                return (
                  <div className={styles.markerContainer} lat={+lat} lng={+lng} key={index}>
                    {
                      !isDesktop ? (
                        <LocationOnOutlineIcon color="secondary" fontSize="large" />
                      ) : (
                        <Paper
                          elevation={3}
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            width: '100px',
                          }}>
                          <Typography variant="subtitle2" gutterBottom>
                            {place.name}
                          </Typography>
                          <img
                      style={{ cursor: 'pointer' }}
                      src={
                        place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
                      }
                      alt={place.name}
                    />
                    <Rating size='small' value={Number(place.rating)} readOnly/>
                        </Paper>
                      )
                    }
                  </div>
                )
              }
            })
          }
        </GoogleMapReact>
      </Box>
    </div>
  )
}

export default Mapnavigation
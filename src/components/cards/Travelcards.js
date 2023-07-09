import React from 'react'
import { Box, Button, Card, CardActions, CardContent, Chip, Rating, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const Travelcards = ({ cardsdata }) => {
  const { name, address, website, web_url ,num_reviews ,rating ,ranking ,phone } = cardsdata
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={cardsdata.photo ? cardsdata.photo.images.large.url : "https://res.cloudinary.com/simplotel/image/upload/x_0,y_252,w_1125,h_632,r_0,c_crop,q_80,fl_progressive/w_550,f_auto,c_fit/icon-business-hotel-kundalahalli/IMG_4533_t7grur"}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating value={rating ? + rating : 0} readOnly />
          <Typography gutterBottom variant="subtitle1">
           {num_reviews}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking &nbsp; &nbsp; &nbsp;</Typography>
          <Typography gutterBottom variant="subtitle1">
            {ranking}
          </Typography>
        </Box>
        {address && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginTop="10px"
          >
            <LocationOnIcon /> {address}
          </Typography>
        )}
        {phone && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <PhoneIcon /> {phone}
          </Typography>
        )}
      </CardContent>
      {cardsdata?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} sx={{ margin: '5px 5px 5px 0px' }} />
        ))}
      <CardActions>
      <Button
            size="small"
            color="primary"
            onClick={() => window.open(web_url, '_blank')}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(website, '_blank')}
          >
            Website
          </Button>
      </CardActions>
    </Card>)
}

export default Travelcards
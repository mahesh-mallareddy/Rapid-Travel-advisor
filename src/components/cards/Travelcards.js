import React from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';

const Travelcards = ( {cardsdata}) => {
    const {name,address , website ,web_url } = cardsdata
  return (

<Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={cardsdata.photo ? cardsdata.photo.images.large.url : ""}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {address}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <a href={web_url}>
            <Button size="small"> More info</Button>
            </a>
          </CardActions>
        </Card>  )
}

export default Travelcards
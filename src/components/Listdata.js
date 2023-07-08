import { Button, Card, CardActions, CardContent, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import CardMedia from '@mui/material/CardMedia';

const Listdata = ({}) => {
  const [optiontype, setoptiontype] = React.useState('restaurant');

  const handleChange = (event) => {
    setoptiontype(event.target.value);
  };
  return (
    <>
      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel >type</InputLabel>
          <Select
            value={optiontype}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={'restaurant'}>restaurant</MenuItem>
            <MenuItem value={'hotels'}>hotels</MenuItem>
            <MenuItem value={'attraction'}>attraction</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </>
  )
}

export default Listdata 
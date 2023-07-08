import { Button, Card, CardActions, CardContent, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import Travelcards from './cards/Travelcards';

const Listdata = ({traveldata}) => {
  const [optiontype, setoptiontype] = React.useState('restaurant');

  // console.log(traveldata?.map((e) => {return e}))

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
        {traveldata?.map((cardsdata)=>{
          return <Travelcards cardsdata ={cardsdata}/>
        })}
      </div>
    </>
  )
}

export default Listdata 
import { Box, Button, Card, CardActions, CardContent, CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import Travelcards from './cards/Travelcards';

const Listdata = ({ traveldata, childClicked, optiontype, isShimmer }) => {
  console.log(optiontype)
  console.log({ childClicked })
  
  return (
      <Box sx={{ padding: '10px' }}>
        
        {isShimmer ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ height: '600px' }}
          >
            <CircularProgress  color="success" size="5rem" />
          </Box>
        ) : ( <Box>
            
          <Grid container  sx={{ height: '75vh',overflow: 'scroll' }}>
            {traveldata?.map((cardsdata) => {
              return <Travelcards cardsdata={cardsdata} />
            })}
            </Grid>
        </Box >
        )}
      </Box>

  )
}

export default Listdata 
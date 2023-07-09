import { Box,  InputLabel, MenuItem,  Select, Typography } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import React from 'react'

const Filter = ({ optiontype, setoptiontype,rating ,setRating}) => {
    const handleChange = (event) => {
        setoptiontype(event.target.value);
    };
    return (
        <Box mx={5}>
            <Box>
                <Typography variant="h6">
                    Restaurants, Hotels &amp; Attractions around you
                </Typography>
            </Box>
            <Box display={'flex'}>
            <Box mx={5}>
                <FormControl
                    sx={{ minWidth: 120, marginBottom: '20px' }}
                >
                    <InputLabel >type</InputLabel>
                    <Select
                        value={optiontype}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={'restaurants'}>Restaurants</MenuItem>
                        <MenuItem value={'hotels'}>Hotels</MenuItem>
                        <MenuItem value={'attractions'}>Attractions</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box mx={10}>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Rating</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group" value={rating} onChange={(e) => setRating(e.target.value)}
                    >
                        <FormControlLabel value="0" control={<Radio />} label="All" />
                        <FormControlLabel value="3.0" control={<Radio />} label="Above 3.0" />
                        <FormControlLabel value="4.0" control={<Radio />} label="Above 4.0" />
                        <FormControlLabel value="4.5" control={<Radio />} label="Above 4.5" />
                    </RadioGroup>
                </FormControl>
            </Box>
            </Box>
        </Box>
    )
}

export default Filter
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { Autocomplete } from '@react-google-maps/api';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Search, SearchIconWrapper, StyledInputBase } from './Muicustom';
import './header.css'

const Header = ({setCoordinates}) => {
  const [autoComplete, setAutoComplete] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const onLoad = (autoC) => setAutoComplete(autoC);

  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();
        setCoordinates({ lat, lng });

    // if (autoComplete) {
    //   if ( autoComplete.getPlace().geometry) {
    //     const lat = autoComplete.getPlace().geometry.location.lat();
    //     const lng = autoComplete.getPlace().geometry.location.lng();
    //     setCoordinates({ lat, lng });
    //   } else {
    //     setShowDialog(true);
    //   }
    // }
  };

  return (
    <div className='header-navbar'>
      <Box >
        <AppBar position="static" className='bg-primary'>
          <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6"
              noWrap
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              Tour advisor
            </Typography>

            <Box >
              <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <Search >
                  <SearchIconWrapper >
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search >
              </Autocomplete>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Header
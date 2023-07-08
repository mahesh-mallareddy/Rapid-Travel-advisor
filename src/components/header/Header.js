import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { borders } from '@mui/system';
import { Search, SearchIconWrapper, StyledInputBase } from './Muicustom';
import './header.css'
const Header = () => {
  return (
    <div className='header-navbar'>
      <Box >
        <AppBar position="static" className='bg-primary'>
          <Toolbar variant="dense" >
          <Box sx={{ display:'flex', justifyContent: 'flex-end' }}>
            <Typography variant="h6" color="inherit" component="div">
              Tour advisor
            </Typography>
            <Search   >
              <SearchIconWrapper >
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search >
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Header
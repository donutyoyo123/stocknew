import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/system';


export default function DenseAppBar() {
  return (
    <Box >
      <AppBar position="static" className='bg'>
        
      </AppBar>

      <AppBar className='rectangle33' sx={{bgcolor:"#8EC3B0",}}>
        <Toolbar variant="dense" >
          <h1 className='oNLINESTORE'>
            ONLINE STOCK
          </h1>
        </Toolbar>
      </AppBar>

      
    </Box>
    
  );
}

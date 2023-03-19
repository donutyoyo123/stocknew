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
    <React.Fragment sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='bg'>
        <Toolbar variant="dense">
        </Toolbar>
      </AppBar>

      <AppBar position="static" sx={{ bgcolor: '#DE4747'}}>
        <Toolbar variant="dense" >
          <h1 className='bgtext'>
            ONLINE STOCK
          </h1>
        </Toolbar>
      </AppBar>

      
    </React.Fragment>
    
  );
}

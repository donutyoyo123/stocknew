import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'

export default function SimplePaper() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 7,
          width: 3000,
          height: 636,
          bgcolor: '#FA9B9B',
        },
      }}
    >
      <Paper elevation={3} />
    </Box>
    
  );
}
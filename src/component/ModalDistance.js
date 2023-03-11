
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';

function ModalDistance({open, onClose}) {

    const handleSubmit = event => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "itemID": itemID,
          "itemHigh": itemHigh,
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://localhost:8081/demo-ws/api/v1/setItemHigh?itemID", requestOptions)
          .then(response => response.text())
          .then(result => {
      alert(result['message'])
      if (result['status']=== 'ok'){
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      </Stack>}})
             
    .catch(error => console.log('error', error));
      }
      
      const [itemID, setItemID] = useState('');
      const [itemHigh, setItemHigh] = useState('');
      
      
  
    if (!open) return null;
    return (
    
      <div onClick={onClose} className='overlay'>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className='modalContainer'
        >
          
          <div className='modalRight'>
            <p className='closeBtn' onClick={onClose}>
              X
            </p>
            <div className='content'>
              
            <form onSubmit={handleSubmit}> 
  
              <Typography variant="h6" gutterBottom>
              Create Product
              </Typography>
              
                  <Grid container spacing={2}>
                
                  <Grid item xs={12} md={6}>
                    
                  <Paper> itemHigh : {itemHigh}</Paper>
                  </Grid>

                  
                  </Grid>
                  
                  <div className='btnContainer'>
                  <Button className='bold' type="submit">YES</Button>
                  </div>
                  
                  </form> 
              
            </div>
            
          </div>
        </div>
      </div>
    );
  };
  

export default ModalDistance;
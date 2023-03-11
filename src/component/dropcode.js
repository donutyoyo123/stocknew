import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';


function EditModal(open,onClose ,props) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:8081/demo-ws/api/v1/findItemByID?itemID=${props.id}`);
      const json = await response.json();
      setData(json);
      setItemName(json['itemName']);
      setAlertThrehold(json['alertThrehold']);
    }
    fetchData();
    
  }, [props.id]);

  const handleSubmit = event => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "itemID": props.id,
      "itemName": itemName,
      "alertThrehold": alertThrehold
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:8081/demo-ws/api/v1/editItem", requestOptions)
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
  
  const [itemName, setItemName] = useState('');
  const [alertThrehold, setAlertThrehold] = useState('');
  
  if (!open) return null;
  return (
    <div>
      
      <form onSubmit={handleSubmit}> 
  
              <Typography variant="h6" gutterBottom>
              Create Product
              </Typography>
              
                  <Grid container spacing={2}>

                  
  
                  <Grid item xs={12} md={6}>
                    
                    <TextField  id="itemName" label="itemName" variant="outlined" fullWidth required onChange={(e) => setItemName(e.target.value)} value={itemName}/>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    
                    <TextField  id="alertThrehold" label="alertThrehold" variant="outlined" fullWidth required onChange={(e) => setAlertThrehold(e.target.value)} value={alertThrehold}/>
                  </Grid>
                  
                  </Grid>
                  
                  <div className='btnContainer'>
                  <Button className='bold' type="submit">YES</Button>
                  </div>
                  
                  </form> 
                  

    </div>
  );
}

export default EditModal;
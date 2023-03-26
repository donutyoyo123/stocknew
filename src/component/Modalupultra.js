import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import swal from 'sweetalert2';        



function EditModal(props) {
  const [data, setData] = useState({});
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:8081/demo-ws/api/v1/findItemByID?itemID=${props.id}`);
      const json = await response.json();
      setData(json);
      setItemID(json['props.id']);
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
    .then(response => { 
      if (response.ok) {
        (swal.fire({
          icon: 'success',
          title: 'แก้ไขข้อมูล เรียบร้อย..',
          
          
        }));
      }
      else{
        (swal.fire({
          icon: 'error',
          title: 'แก้ไขข้อมูล ผิดพลาด..',
          
        }));
      }
      response.json()})
      .then(result => {
        alert(result['message'])
         {
           
           }
          
       })
    .catch((error) => console.log("error", error));
       
  }
  
  const [id, setItemID] = useState('');
  const [itemName, setItemName] = useState('');
  const [alertThrehold, setAlertThrehold] = useState('');
 

  return (
    <div >
      <div className='modalContainer'>
      <div className='modalRight'>
      <p className='closeBtn' onClick={props.onClose}>
            X
          </p>
          <div className='content'>
      <form onSubmit={handleSubmit}> 
  
              <Typography  variant="h6" gutterBottom>
              EDIT PRODUCT
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
                  <Button className='bold' type="submit" sx={{bgcolor: "#0FA065",}}>YES</Button>
                  </div>
                  
                  </form> 
                  </div>
                  </div>
                  </div>
    </div>
  );
}

export default EditModal;
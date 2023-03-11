import React, { useState,useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';
import Modal from './Modal';
import ButtonGroup from '@mui/material/ButtonGroup';
import Modalup from './ModalUpdate';
import './App.css';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
  }));
 
  
  

export default function SimpleContainerz() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/demo-ws/api/v1/items")
          .then(res => res.json())
          .then(
            (result) => {
              setItems(result);
            }
          )
      }, [])
    
      const [openModal, setOpenModal] = useState(false);
      const [openModalup, setOpenModalup] = useState(false);

      const UserDelete = id => {
        var myHeaders = new Headers();
        myHeaders.append("accept", "*/*");

        var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
       };
      
fetch("http://localhost:8081/demo-ws/api/v1/deleteItem?id="+id, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
      }
  return (
    <React.Fragment>
      
      
<CssBaseline />
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <Grid xs={13} md={5}>
          {items.map((row) => (
            <TableRow
              key={row.itemID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.itemID}
              </TableCell>
              <Box
                 sx={{
                   display: 'flex',
                   position: 'relative' ,  left: 73,
                   flexWrap: 'wrap',
                   '& > :not(style)': {
                   width: 200,
                   height: 130,
                   },
                  }}
                  >
                      <Paper elevation={3} ><h1>{row.itemName}</h1></Paper>
            </Box>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </Grid>
      </Table>
    </TableContainer>

    
      
        
        <Box>
                 <Button onClick={() => setOpenModal(true)} >
                    Create
                </Button>
                <Modal open={openModal} onClose={() => setOpenModal(false)} />
                </Box>
      
    </React.Fragment>
  );
}

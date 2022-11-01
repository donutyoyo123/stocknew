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
  
 
  
  

export default function SimpleContainer() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/demo-ws/items")
          .then(res => res.json())
          .then(
            (result) => {
              setItems(result);
            }
         
          )
      }, [])
    
      
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Paper sx={{ p: 2}}>
        <Box display="flex">
            <Box sx={{ flexGrow: 1 }}> 
            <Typography variant="h6" gutterBottom>
               PRODUCT
            </Typography>
            </Box>
            <Box>
            <Link href="create">
               <Button variant="contained" sx={{ bgcolor: '#FF92A4' }}>
                    CREATE
              </Button>
            </Link>
               



            </Box>
        </Box>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead >
          <TableRow >
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">First name</StyledTableCell>
            <StyledTableCell align="right">Last name</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <StyledTableRow key={row.itemID}>
              <StyledTableCell component="th" scope="row">
                {row.itemID}
              </StyledTableCell>
              <StyledTableCell align="right">{row.fname}</StyledTableCell>
              <StyledTableCell align="right">{row.lname}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Paper>
      </Container>
    </React.Fragment>
  );
}

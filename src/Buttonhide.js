import React, { useState, useEffect, useReducer } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "@mui/material/Link";
import Modal from "./component/Modal";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./App.css";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EditModal from "./component/Modalupultra";
import { SettingsRemoteOutlined } from "@mui/icons-material";
import SimpleContainerload from "./Userload";
import swal from 'sweetalert2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Buttonhide(){

    

    const Usersethigh = (id) => {
        var myHeaders = new Headers();
        myHeaders.append("accept", "*/*");
    
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          redirect: "follow",
        };
    
        fetch(
          "http://localhost:8081/demo-ws/api/v1/setItemHigh?itemID=" + id,requestOptions
        )
          .then(response => { 
            if (response.ok) {
              (swal.fire({
                icon: 'success',
                title: 'เสร็จสิ้น!',
                text: 'บันทึกความสูงสินค้า เรียบร้อย...',
                
              }));
            }
            response.json()})
          .then((result) => {
            alert(result["result"]);
            if (result.status === '200') {
              UserGet();
            }
          })
          .catch((error) => console.log("error", error));
      };
    
    
      const Usersetdis = (id) => {
        var myHeaders = new Headers();
        myHeaders.append("accept", "*/*");
    
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          redirect: "follow",
        };
    
        fetch(
          "http://localhost:8081/demo-ws/api/v1/setMaxDistance?itemID=" + id,
          requestOptions
        )
        .then(response => { 
          if (response.ok) {
            (swal.fire({
              icon: 'success',
              title: 'เสร็จสิ้น!',
              text: 'กำหนดความสูงของชั้นวางสินค้า เรียบร้อย!',
              
            }));
          }
          response.json()})
        .then((result) => {
          alert(result["result"]);
          if (result.status === '200') {
            UserGet();
          }
        })
        .catch((error) => console.log("error", error));
      };
    
}

return (
    <Box>
    <Button 
                  variant="contained"
                  sx={{
                    bgcolor: "#FA7373",
                    display: "flex",
                    position: "relative",
                    top: 307,
                    left: 40,
                    flexWrap: { width: 200, height: 28 },
                  }}
                  onClick={() => Usersethigh(row.itemID)}
                >
                  {" "}
                  ตั้งค่าความสูงสินค้า{" "}
                </Button>
                
                <Button 
                  variant="contained"
                  sx={{
                    bgcolor: "#FA7373",
                    display: "flex",
                    position: "relative",
                    top: 307,
                    left: 40,
                    flexWrap: { width: 200, height: 28 },
                  }}
                  onClick={() => Usersetdis(row.itemID)}
                  
                >
                  {" "}
                  ตั้งค่าความสูงชั้นวาง{" "}
                </Button>
                </Box>
  );


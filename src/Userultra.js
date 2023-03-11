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

export default function SimpleContainer() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [itemID, setItemID] = useState("");
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  const handleEdit = (id) => {
    setModalData(id);
    setShowModal(true);
  };

  function handleSave() {
    setShowModal(false);
  }

  const UserGet = () => {
    fetch("http://localhost:8081/demo-ws/api/v1/items")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        
      });
      forceUpdate();
  };

  useEffect(() => {
    UserGet();
  }, [ignored]);

  const UserDelete = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("accept", "*/*");

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "http://localhost:8081/demo-ws/api/v1/deleteItem?id=" + id,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        alert(result["result"]);
        {
          UserGet();
        }
      })
      .catch((error) => console.log("error", error));
  };

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
      .then((response) => response.json())
      .then((result) => {
        alert(result["message"]);
        if (result.status === 200) {
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
      .then((response) => response.json())
      .then((result) => {
        alert(result["message"]);
        if (result["status"] === "200") {
          UserGet();
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <Container className='bgcontain' sx = {{top: 10,}}>
      <Grid container spacing={{ xs: 4, md: 0 }}  justifyContent="center">
        {items.map((row) => {
          
          return (
            <Grid item xs={3}  key={row.itemID}>
              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                  top: 79,
                  left: 40,
                  flexWrap: "wrap",
                  "& > :not(style)": { width: 200, height: 130 },
                }}
              >
                <Paper elevation={3} className="Typename">
                  <h1>{row.itemName}</h1>
                </Paper>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                  top: 84,
                  left: 40,
                  flexWrap: "wrap",
                  "& > :not(style)": { p: 1, width: 130, height: 20 },
                }}
              >
                <Paper elevation={3}> Amount : {row.amount}</Paper>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                  top: 48,
                  left: 194,
                  flexWrap: "wrap",
                  "& > :not(style)": { p: 1, width: 30, height: 20 },
                }}
              >
                <Paper elevation={3}>
                  {" "}
                  <FiberManualRecordIcon
                    fontSize="small"
                    sx={{
                      mr: 1,
                      position: "relative",
                      left: 5,
                      color: row.alertStatus === "LOW" ? "#d9182e" : "#4caf50",
                    }}
                  />
                </Paper>
              </Box>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "#FA7373",
                  display: "flex",
                  position: "relative",
                  top: 52,
                  left: 40,
                  flexWrap: { width: 76, height: 28 },
                }}
                onClick={() => handleEdit(row.itemID)}
              >
                Edit
              </Button>
              

              <Button
                variant="contained"
                sx={{
                  bgcolor: "#FA7373",
                  display: "flex",
                  position: "relative",
                  top: 24,
                  left: 120,
                  flexWrap: { width: 120, height: 28 },
                }}
                onClick={() => UserDelete(row.itemID)}
              >
                Del
              </Button>
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#FA7373",
                    display: "flex",
                    position: "relative",
                    top: 28,
                    left: 40,
                    flexWrap: { width: 105, height: 28 },
                  }}
                  onClick={() => Usersethigh(row.itemID)}
                >
                  {" "}
                  SET HIGH{" "}
                </Button>
                </Box>
                <Box>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#FA7373",
                    display: "flex",
                    position: "relative",
                    top: 0,
                    left: 150,
                    flexWrap: { width: 90, height: 28 },
                  }}
                  onClick={() => Usersetdis(row.itemID)}
                >
                  {" "}
                  SETDIS{" "}
                </Button>
              </Box>
            </Grid>
          );
        })}
        {showModal && (
                <EditModal
                  id={modalData}
                  onClose={() => setShowModal(false)}
                  onSave={handleSave}
                />
              )}
        
      </Grid>
      
    </Container>
  );
}

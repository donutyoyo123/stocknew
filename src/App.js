import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import DenseAppBar from './component/Nav';
import SimpleContainer from "./Userultra";
import SimplePaper from "./body";
import { Button, Grid } from "@mui/material";
import SimpleContainerload from "./Userload";
import { Container } from "@mui/system";
import EditModal from "./component/Modalupultra";
import React, { useState, useEffect } from 'react';
import Footer from "./component/footer";


function App() {
  
  return (
    <div >
      
      <DenseAppBar/>
      <SimpleContainer/>
      <Footer/>
      
    </div>
    
  );
}

export default App;
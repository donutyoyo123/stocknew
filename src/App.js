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
import Sidebar1 from "./sidebar";
import Sidebar2 from "./sidebar2";



function App() {
  
  return (
   
    <div>
      <div className="bgbig">
      
      
      <div className="rectangle117"></div>
      <div className="rectangle116"></div>
      <div className="rectangle169"></div>
      <div className="rectangle119"></div>
      <div className="rectangle120"></div>
      </div>
      <DenseAppBar/>
      <SimpleContainer/>
      
      
      
    </div>
    
  );
}

export default App;
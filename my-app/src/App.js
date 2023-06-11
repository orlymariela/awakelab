
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Books from './components/Books';
import Home from './components/Home'
import axios from "axios";
import React, { useEffect } from "react";


function App() {
 
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={ <Home/>} /> 
        <Route path="/books" element={ <Books/>} />     
     

      </Routes>
     
    </BrowserRouter> 
  )
}

export default App;

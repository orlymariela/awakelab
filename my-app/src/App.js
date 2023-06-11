
import './index.css';
import {BrowserRouter,Routes,Route, Form} from "react-router-dom";
import Navbar from './components/Navbar';
import Books from './components/Books';
import Home from './components/Home'
import React from "react";
import { DataRouter } from 'react-router-dom';


function App() {
 
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={ <Home/>} /> 
        <Route path="/books" element={ <Books/>} />   
        <Route path="/Form" element={<Form/>}/>  
     

      </Routes>
     
    </BrowserRouter> 
  )
}

export default App;

import React from "react";

import './index.css';

import {BrowserRouter,Routes,Route, Form} from "react-router-dom";

import Navbar from './components/Navbar';
import Books from './components/Books';
import Home from './components/Home';
import Formulario from './components/Formulario';

function App() {
 
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={ <Home/>} /> 
        <Route path="/books" element={ <Books/>} />   
        <Route path="/Formulario" element={ <Formulario/>} />  
     
      </Routes>
     
    </BrowserRouter> 
  )
}

export default App;

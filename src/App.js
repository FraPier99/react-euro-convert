import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../src/styles/App.css'

import ConversionDisplay from './components/ConversionDisplay';



function App() {


  return (

  <><Container className='main-container mt-3 text-center'>
    
    <h1 style={{ color: '#1D1F5B' }}>Currency Converter</h1>

    <p>Check Lives rates,set rate allerts and more

    </p>
 
       <ConversionDisplay />
       
   
    </Container></>
  );
}


export default App
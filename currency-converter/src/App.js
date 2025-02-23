import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import '../src/styles/App.css'

import ConversionDisplay from './components/ConversionDisplay';



function App() {


  return (

  <><Container className='main-container mt-3 text-center'>
    
    <h1>Currency Converter Test</h1>

   
 
       <ConversionDisplay />
       
   
    </Container></>
  );
}


export default App
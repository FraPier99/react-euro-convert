import React,{useState,useEffect} from "react";

import axios from "axios";
import aud from  '../images/aud.png'; 
import  cad from '../images/cad.jpg';
import  eur from '../images/eur.png';
import gbp from '../images/gbp.png'
import  jpy from '../images/jpy.jpg'
import usd from '../images/usd.jpg'
import CustomAutocomplete from "./CustomAutocomplete";
import AmountInput from "./AmountInput";
import SwapValute from "./SwapValute";
import Button from '@mui/material/Button';
import API_KEY from "../utils/api";
import { Container, Row, Col, Form } from "react-bootstrap";

const CurrencyDisplay = () => {
    const [state, setState] = useState({
      result:'',
      amount: 100,
      convAmount: '',
      
      selectedCurrency: 'USD',
      selectedConvCurrency: 'EUR',
    
      rates:{


      }
    });

   

   const fetchCurrencies =  async () =>{
 try{

const res = await  axios.get(`https://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&base=${state.selectedCurrency}`)


setState((prevState)=>({
  ...prevState,
  rates: res.data?.rates || {}

}))


 }catch(err){

  console.error(err,'error fetch')
 }
   


    



   }


    const options =[
      {label: 'USD',img:usd},
      {label:'EUR',img:eur},
      {label:'GBP',img:gbp},
      {label:'CAD',img:cad},
      {label:'AUD',img:aud},
      {label:'JPY',img:jpy}


    ]


    
    // useEffect(()=>{

    //   fetchCurrencies()
      
    //       },[state.selectedCurrency])

 






const handleAmountChange = (value) =>{
  setState((prevState)=>({
    ...prevState,
    amount:value
  }))


}
    

const handleCurrencyChange = (key, value) => {
  console.log(key,value)
  setState((prevState) => ({
    ...prevState,
    [key]: value,
  }));
};


const exchangeRates = () =>{
  const {selectedCurrency,selectedConvCurrency,rates,amount} = state
  const rate = rates[selectedConvCurrency]


  setState((prevState)=>({
    ...prevState,
    result :  `${amount} ${selectedCurrency} = ${amount * rate} ${selectedConvCurrency} `




  }))
  console.log(amount * rate)



}


const swapCurrencies = () => {
setState((prevState)=>({
...prevState,
selectedCurrency: prevState.selectedConvCurrency,
selectedConvCurrency: prevState.selectedCurrency,

}))
};

    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setState({ ...state, [name]: value });
    // };
  
 
  
    return (
      <Container  className="mt-2" style={{display:'flex',flexDirection:'column',

        justifyContent:'center',alignItems:'center',
      textAlign:'center'}}>
<AmountInput label=""
        value={state.amount}
        onChange={(e)=>handleAmountChange(e.target.value)}

      
      />
  {/* Selettore della valuta di origine */}
  <CustomAutocomplete
        value={state.selectedCurrency}
        onChange={(value) => handleCurrencyChange("selectedCurrency", value)}
        options={options}
        label="Select base currency"
      />
      <SwapValute   onSwap={swapCurrencies}  />

      {/* Selettore della valuta di destinazione */}
      <CustomAutocomplete
        value={state.selectedConvCurrency}
        onChange={(value) => handleCurrencyChange("selectedConvCurrency", value)}
        options={options}
        label="Select target currency"
      />
 <Button  
 disabled={ state.selectedCurrency && state.selectedConvCurrency ?  false : true }
        variant="contained"
        onClick={exchangeRates 
        }
        sx={{ marginTop: 2 }}
      >
        Convert
      </Button>


{state.result ? <p>{state.result}</p> : null}
        {/* <Valutes
        val={images[state.selectedCurrency]}
          value={state.amount}
          nome="amount"
          onChange={handleChange}
          types={INITIAL_STATE}
          title="Amount"
          selectedCurrency={state.selectedCurrency}
        />
        <div className="hr-container">
          <Button onClick={swapCurrencies}>🔃</Button>
        </div>


        <Valutes
        val={images[state.selectedConvCurrency]}
  value={state.convAmount}
  nome="convAmount"
  onChange={handleChange}
  types={INITIAL_STATE}
  title="Converted Amount"
  selectedCurrency={state.selectedConvCurrency}
/> */}
      </Container>
    );
  };
  
  export default CurrencyDisplay;
  
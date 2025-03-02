import React,{useState,useEffect, useCallback} from "react";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import aud from  '../images/aud.png'; 
import  cad from '../images/cad.jpg';
import  eur from '../images/eur.png';
import gbp from '../images/gbp.png'
import  jpy from '../images/jpy.jpg'
import usd from '../images/usd.jpg'
import CustomAutocomplete from "./CustomAutocomplete";
import AmountInput from "./AutoInput";
import Button from '@mui/material/Button';


// gestione della chiamati api e state

const CurrencyDisplay = () => {
    const [state, setState] = useState({
      result:'',
      amount: 100,
      convAmount: '',
      
      selectedCurrency: 'EUR',
      selectedConvCurrency: 'USD', 
    
      rates:{


      }
    });

   const fetchCurrencies = useCallback(async () =>{
 try{

const res = await  axios.get(`/.netlify/functions/fetch-currencies?base=${state.selectedCurrency}`)


setState((prevState)=>({
  ...prevState,
  rates: res.data?.rates || {}

}))


 }catch(err){

  console.error(err,'error fetch')
 }
   


    



   },[state.selectedCurrency])


   // dataset valut principali 

    const options =[
      {label: 'USD',img:usd},
      {label:'EUR',img:eur},
      {label:'GBP',img:gbp},
      {label:'CAD',img:cad},
      {label:'AUD',img:aud},
      {label:'JPY',img:jpy}


    ]


    
    useEffect(()=>{

      fetchCurrencies()
      
          },[fetchCurrencies])

 






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
    result :  `${amount} ${selectedCurrency} = ${Math.ceil(amount * rate)} ${selectedConvCurrency} `




  }))
  console.log(amount * rate)



}
    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setState({ ...state, [name]: value });
    // };
  
 
  
    return (
      <Container id='box' className="mt-2" >
<AmountInput label="Enter amount"
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

      {/* Selettore della valuta di destinazione */}
      <CustomAutocomplete
        value={state.selectedConvCurrency}
        onChange={(value) => handleCurrencyChange("selectedConvCurrency", value)}
        options={options}
        label="Select target currency"
      />
 <Button  
className="mb-4 button-convert"
 disabled={ state.selectedCurrency && state.selectedConvCurrency && (state.amount !=='' ) ?  false : true }
        variant="contained"
        onClick={exchangeRates 
        }
        sx={{ marginTop: 2 }}
      >
        Convert
      </Button>


{state.result ? <p>{state.result}</p> : null}
       
      </Container>
    );
  };
  
  export default CurrencyDisplay;
  
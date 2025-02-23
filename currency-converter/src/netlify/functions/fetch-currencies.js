 

 import axios from "axios";

 exports.handler = async (event,context) =>{

    const {base} =  event.queryStringParameters

    const API_KEY =  process.env.REACT_APP_API_KEY
console.log(API_KEY)

    if(!base){
        return {

        statusCode:400,
        body:JSON.stringify({error:'Errore,valuta base richiesta'})
        }
    }

    const url = `https://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}&base=${base}`

    try{

        const res = await axios.get(url)
        return{
            statusCode:200,
            body:JSON.stringify({rates:res.data?.rates || {}})
        }
        
    }catch(error){

        return{
            statusCode:500,
            body:JSON.stringify({error:'errore durante fetch dati'})
        }
    }
 }
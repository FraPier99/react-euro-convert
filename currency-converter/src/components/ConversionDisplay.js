import React from "react";
import Container from "react-bootstrap/esm/Container";
import CurrencyDisplay from "./CurrencyDisplay";

// funge solo da parent child contenitore 

const ConversionDisplay = () =>{

    return (

<Container className="container-display " >
<CurrencyDisplay />

</Container>

    )


}


export default ConversionDisplay
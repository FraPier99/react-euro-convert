import React from "react";
import TextField from "@mui/material/TextField";

const AmountInput = ({ label, value, onChange}) => {
  return (
 
 
      <TextField style={{width:'100%'}}
        className="mt-2 mb-2"
        label={label}
        type="number"
        value={value}
        name="amount"
        id="standard-basic"
        variant="standard"
        onChange={onChange}
        sx={{ width: 250 }}
        InputProps={{
          inputProps: {
            min: 0,
            step: 1,
          },
        }}
      />
      
  
   
      


    
   
  );
};

export default AmountInput;




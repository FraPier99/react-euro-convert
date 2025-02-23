import React from "react";
import TextField from "@mui/material/TextField";

const AmountInput = ({ label, value, onChange }) => {
  return (
    <TextField
    focused 
    className="mt-2 mb-2"
      label={label}
      type="number"
      value={value}
      name="amount"
     id="standard-basic"
   variant="standard"
   onChange={onChange}
      sx={{ width: 300 }}
      InputProps={{
        inputProps: {
          min: 0, // Imposta il valore minimo a 0
          step: 1, // Passo per i decimali
        },
      }}
    />
  );
};

export default AmountInput;




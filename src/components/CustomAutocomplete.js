

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { Box} from '@mui/material';





const CustomAutocomplete = ({ options,  label,onChange,value}) => {
  
  return (
    <Autocomplete
    style={{ width: '100% !important' }}
    className="mt-2 mb-2"
    id="custom-autocomplete"
    options={options}
    autoHighlight
    getOptionLabel={(option) => option.label}
    value={options.find((option) => option.label === value) || null} // Trova l'opzione corrispondente
    onChange={(_event, newValue) => {
      onChange(newValue?.label || ""); // Passa solo il valore selezionato
    }}
    renderOption={(props, option) => {
      const { key, ...restProps } = props; // Rimuovi "key"
      return (
        <Box
          key={key}
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...restProps}
        >
          <img
            {...{
              loading: "lazy",
              width: "20",
              src: option.img,
              alt: option.label,
            }}
          />
          {option.label}
        </Box>
      );
    }}
    renderInput={(params) => {
      // Ottieni l'opzione corrispondente
      const selectedOption = options.find((option) => option.label === value);
  console.log(selectedOption,'kk')
      return (
        <TextField
          {...params}
          className="mt-2 mb-2"
          label={label}
          InputProps={{
            ...params.InputProps,
            startAdornment: selectedOption ? (
              <Box
                component="img"
                src={selectedOption.img}
                alt={selectedOption.label}
                sx={{  borderRadius:'2px',width: 30, height: 30, mr: 1 }}
              />
            ) : null,
          }}
        />
      );
    }}
  />
  );
};

export default CustomAutocomplete;


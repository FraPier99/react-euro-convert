
import IconButton from "@mui/material/IconButton";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { Button } from "react-bootstrap";

const SwapValute = ({onSwap}) =>{
return (

    <Button id='swap' title="swap currencies"><SwapHorizIcon  style={{fontSize:' 1.8rem'}}  onClick={onSwap} />
       </Button> 
)
}


export default SwapValute
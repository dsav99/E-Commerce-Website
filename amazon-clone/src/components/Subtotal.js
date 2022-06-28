import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import React from "react";
import CurrencyFormat from 'react-currency-format';
import "../Css/Subtotal.css"
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import {useNavigate} from 'react-router-dom'

function Subtotal(){

    var [{basket},dispatch] =useStateValue();
    const navigate  = useNavigate();
    
  

    return (
        <div className="subtotal">
            <CurrencyFormat 
            renderText={(value)=>(
                <>
                    <p>
                        Subtotal ({basket?basket.length:0} items):
                        <strong>{`${value}`}</strong>
                    </p>
                    <small className="subtotal-gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />

            <button onClick={e=> navigate('/payment')} >Proceed to checkout</button>
        </div>
    )
}

export default Subtotal;
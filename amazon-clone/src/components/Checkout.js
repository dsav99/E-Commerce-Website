import React, { useReducer, useState,forwardRef } from "react";
import "../Css/Checkout.css"
import FlipMove from 'react-flip-move';

import Subtotal from "./Subtotal";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from "../StateProvider";


const FunctionProduct =  forwardRef((props,ref) => (
    <div ref={ref}>
        <CheckoutProduct
                            id={props.id}
                            title={props.title}
                            image={props.image}
                            price={props.price}
                            rating={props.rating}
                        />
    </div>
));
function Checkout() {
    const [{basket,user},dispatch]= useStateValue();
    // console.log("My basket is: "+JSON.stringify(basket.id));
    return (
        <div className="checkout">
            <div className="checkout-left">
                <img className="checkout-ad" src="" alt="AD HERE" />

                <div>
                    <h3>Hello ,{user?.email}</h3>
                    <h2 className="checkout-title">Your Cart</h2>
                    <FlipMove>
                    {basket.map((item,i)=>{
                        return(
                            <FunctionProduct key={i} {...item}/>
                        )
                    })}
                    </FlipMove>

                    
                </div>
            </div>
            <div className="checkout-right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout;
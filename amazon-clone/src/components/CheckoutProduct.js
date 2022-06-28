import React from "react";
import  "../Css/CheckoutProduct.css";
import book from "../harry.jpg";
import { useStateValue } from "../StateProvider";


function CheckoutProduct(props){

    const [state,dispatch] = useStateValue();


    const removeFromBasket =()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:props.id
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutproduct-image" src={props.image}/>

            <div className="checkoutproduct-info">
                <p className="checkoutproduct-title">{props.title}</p>
                <p className="checkoutproduct-price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="checkoutproduct-rating">
                    {Array(props.rating).fill().map((_,i)=>{
                        return (<p>🌟</p>)
                    })}
                </div>
                {!props.hideButton && <button onClick={removeFromBasket}>Remove from Cart</button> }
            </div>
        </div>
    )
}

export default CheckoutProduct
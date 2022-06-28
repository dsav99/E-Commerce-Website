import React, { useEffect, useState } from "react";
import '../Css/Payment.css'
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link ,useNavigate} from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from "../reducer";
import axios from '../axios';
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import {db} from '../firebase';


function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [succeeded,setSucceeded] =  useState(false);
    const [processing,setProcessing] = useState(false);
    const [clientSecret,setClientSecret] = useState(true);


    // IMPORTANT!

    useEffect(()=>{
        var price =((getBasketTotal(basket).toFixed(2))*100);
        console.log("Price of basket is :",price);
    
 
         
            
            const getClientSecret = async ()=>{
                const response = await axios({
                    method:"post",
                    url:`/payments/create?total=${price.toFixed(0)}`
                })
                setClientSecret(response.data.clientSecret);
            }
        getClientSecret();
        
    },[basket])

    console.log("SECRET :",clientSecret);
    

    // IMPORTANT!






    const handleSubmit = async (e) => {
        // Stripe
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            // PaymentIntent= payment confirmation

            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket,
                amount:paymentIntent.amount,
                created:paymentIntent.created
            })



            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type:'EMPTY_BASKET'
            })
            
        })
        .catch(({error})=>{console.log(error);})

        navigate('/orders',{replace:true});
        


    }

    const handleChange = e => {
        // Stripe
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }


    return (
        <div className="payment">
            <div className="payment-container">
                {/* Payment section - delivery address */}
                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length}</Link> items)
                </h1>
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment-address">
                        <p>{user?.email}</p>
                        <p>XXX Lane</p>
                        <p>XXX City</p>
                    </div>
                </div>





                {/* Review Items */}
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment-items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>





                {/* Payment method */}
                <div className="payment-section">
                    <div className="payment-title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment-details">
                        {/* Stripe */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment-price-container">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <p>
                                                Subtotal ({basket ? basket.length : 0} items):
                                                <strong>{`${value}`}</strong>
                                            </p>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={disabled || processing
                                || succeeded}> 
                                <span>{processing ?<p>Processing</p>:"Buy Now" }</span>

                                </button>
                            </div>

                            {/* ERRORS */}

                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
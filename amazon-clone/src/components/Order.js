import React from "react";
import '../Css/Order.css'
import moment from "moment";
import CheckoutProduct from '../components/CheckoutProduct';
import CurrencyFormat from "react-currency-format";

export default function Order({order}){
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMM DD YYYY, H:mma')}</p>
            <p><small>{order.id}</small></p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            hideButton={true}
                        />
            ))}

            <CurrencyFormat 
            renderText={(value)=>(
                <>
                    <h3 className="order-total">
                        Order total : {value}
                    </h3>
                </>
            )}
            decimalScale={2}
            value={order.data.amount/100}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
        </div>
    )
}
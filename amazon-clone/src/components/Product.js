import React from "react";
import "../Css/Product.css"

import {useStateValue} from '../StateProvider'



function Product({id,title,image,price,rating}) {

    const [state,dispatch] = useStateValue();
    const addToBasket=()=>{
        // Dispatch action into the data layer
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    }
    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product-rating">
                    {Array(rating).fill().map((_,i)=>{
                        return (<p>🌟</p>)
                    })}
                    
                </div>
            </div>

            <img src={image} alt="image goes here" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;
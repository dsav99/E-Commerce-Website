import React, { useEffect, useState } from "react";
import "../Css/Home.css"
import Product from './Product'
import cover from '../cover.jpeg'


function Home() {


    return (
        <div className="home">
            <div className="home-container" >
                {/* <img className="home-image" src={"https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"} /> */}

                <div className="home-row">
                    <Product 
                    id="B08P3QVFMK"
                    title="LED Flashlight Gloves, Gifts for Men Him Dad Boyfriend, Cool Gadget Hands-Free Lights for Camping Fishing Repairing, Fathers Day Christmas Birthday Gift (add Electronics)"
                    price={19.99} 
                    image={"https://m.media-amazon.com/images/I/41mSmuFaQIL.jpg"} 
                    rating={5}/>
                    <Product 
                    id="B00652G4TS"
                    title="BlueDriver Pro OBD2 Bluetooth Car Scan Tool and Code Reader" 
                    price={79.00} 
                    image={"https://m.media-amazon.com/images/I/41-PrU1phUL.jpg"} 
                    rating={5}/>
                </div>
                <div className="home-row">
                <Product 
                    id="B08SWD2SCK"
                    title="Amazon Fire TV 43-inch 4-Series 4K UHD Smart TV" 
                    price={199.99} 
                    image={"https://m.media-amazon.com/images/I/41y0yqZPU8L.jpg"} 
                    rating={5}/>
                    <Product 
                    id="B07P989QTJ"
                    title="Prime members save on Luna Gaming Controller" 
                    price={49.99} 
                    image={"https://m.media-amazon.com/images/I/31rZcGd+U2L.jpg"} 
                    rating={5}/>
                    <Product 
                    id="B08VJ5PCM8"
                    title="LUXHMOX Double Long Soft Rifle Case, American Classic Outdoor Tactical Carbine Rifle Bag "
                    price={67.96} 
                    image={"https://m.media-amazon.com/images/I/51q0E4YxmhS.jpg"} 
                    rating={5}/>

                </div>
                <div className="home-row">
                <Product 
                    id="4903852"
                    title="Toshiba 4K Smart Fire TV with Far Field Technology" 
                    price={699.99} 
                    image={"https://m.media-amazon.com/images/I/512k25-6LdL.jpg"} 
                    rating={5}/>
                </div>
            </div>

        </div>
    )
}

export default Home;
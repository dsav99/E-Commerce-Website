import React from "react";
import "../Css/Home.css"
import Product from './Product'
import cover from '../cover.jpeg'
import book from "../harry.jpg"
import axios from "axios";

function Home() {

    const options = {
        method: 'GET',
        url: 'https://amazon24.p.rapidapi.com/api/todaydeals',
        headers: {
          'X-RapidAPI-Key': 'e64b538230msh00bbd2aa8b989fdp152058jsn05f4d224c600',
          'X-RapidAPI-Host': 'amazon24.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

    return (
        <div className="home">
            <div className="home-container" >
                <img className="home-image" src={cover} />

                <div className="home-row">
                    <Product 
                    id="4903850"
                    title="Harry Potter" 
                    price={19.99} 
                    image={book} 
                    rating={5}/>
                    <Product 
                    id="4903850"
                    title="Harry Potter" 
                    price={19.99} 
                    image={book} 
                    rating={5}/>
                </div>
                <div className="home-row">
                <Product 
                    id="4903851"
                    title="Harry Potter" 
                    price={19.99} 
                    image={book} 
                    rating={5}/>
                    <Product 
                    id="4903850"
                    title="Harry Potter" 
                    price={19.99} 
                    image={book} 
                    rating={5}/>
                    <Product 
                    id="4903850"
                    title="Harry Potter" 
                    price={19.99} 
                    image={book} 
                    rating={5}/>

                </div>
                <div className="home-row">
                <Product 
                    id="4903852"
                    title="Harry Potter" 
                    price={19.99} 
                    image={book} 
                    rating={5}/>
                </div>
            </div>

        </div>
    )
}

export default Home;
const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe=require("stripe")
('sk_test_51LDl2PAjG1pX8BsCwwN0pTRzYQcak81PezPyk3H0q4yAvWWxxL21lHDADb4KEICq3TZ9fRzUBQBXJq8APTIniFrq008uX62LP2')
const { log } = require("firebase-functions/logger");

// API




// App Config
const app = express();



// Middlewares
app.use(cors());
app.use(express.json());






// API Routes


app.get('/',(req,res)=>res.status(200).send("YO!"))
app.get('/payments/create',(req,res)=>res.status(200).send("YO0000!"))



app.post('/payments/create',async (req,res)=>{
    const total = req.query.total;

    console.log('Payment request received BOOMMMM!!,',total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:"usd"
    })

    res.status(201).send({
        clientSecret:paymentIntent.client_secret
    })
});




// Listen commmand



exports.api = functions.https.onRequest(app);


// Example endpoint
// http://localhost:5001/project-4dadb/us-central1/api
// http://localhost:5001/project-4dadb/us-central1/api
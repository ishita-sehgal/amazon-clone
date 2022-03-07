//Backend express app running on cloud functions
const functions = require("firebase-functions");
const express =require("express");
const cors=require("cors");
const stripe=require("stripe")('sk_test_51KQpgMSFMsoN45QRptelp94MZokCqH5srLlsv7rZlzKNcvFu0BcSFx1iQkWWKNMAbQeeCzPXnBhY5lgUpWIxJGky00vmIhMF0U');

//API

//-APP config
const app=express();

//-Middlewares
app.use(cors({origin:true}));
app.use(express.json());
//-API routes
app.get('/',(request,response)=>response.status(200).send('hello world'));
app.post("/payments/create",async (request,response)=>{
    const total=request.query.total;
    console.log("payment request received for this amount>>>",total);

    const paymentIntent=await stripe.paymentIntents.create({
        amount:total, //subunits of currency
        currency:"inr",
    });
    console.log("payment intent HERE >>>>>",paymentIntent);
    //OK- Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//-Listen command
exports.api=functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-9c143/us-central1/api
// http://localhost:5001/clone-9c143/us-central1/api

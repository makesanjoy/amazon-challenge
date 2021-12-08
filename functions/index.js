// const functions = require("firebase-functions");

// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //   functions.logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });
// // const express = require("express");
// // const cors = require("cors");
// // const { request, response } = require("express");
// // const stripe = require("stripe")('sk_test_51K3KdBSBmXNp7QoVAUc9BDAA2w4FdGfkKQw9lFQRNExg0FTbbXxFoSd0mbcI9pZYyTG1OF1xjYNjjEwNUB8To9z300OhCORgm4')

// //API

// //-App config
// const app = express();

// //-MIDDLEWARE
// app.use(cors({ origin: true }));
// app.use(express.json()); //this will allow us to send data and pass it in the form of json

// //-API routes
// app.get('/',(request,response)=> response.status(200).send(''))

// app.post('/payments/create',async (request, response) => {
   
//     const total = request.query.total;

//     const paymentIntent = await stripe.paymentIntent.create({

//         amount: total, // subunits of the currency
//         currency:"usd",  //
//     });
// // OK - CREATED GOOD
//     response.status(201).send({
//         clientSecret: paymentIntent.client_secret,
//     })
   
// })

// //-Listen command
// exports.api = functions.https.onRequest(app)

//Example endpoint
//http://localhost:5001/ama-clone-32465/us-central1/api


// THIS IS THE SET UP NEEDED TO MAKE BACKEND APP EXPRESS RUN ON THE CLOUD FUNCTION


const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HPvU9DFg5koCdLGeOEiFvwHat4v8eMjX6SY0YCwxPBQBUPhKy1fPVhiSM5cQtgW7QBG9ydQcXnW57TDxVE2f3H000HSfmEQZF"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api


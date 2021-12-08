
import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import Order from './Order'
import { BrowserRouter as Router,Routes, Route}
from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


//this is a public key so we dont need to hide this key
const promise = loadStripe('sk_test_51K3KdBSBmXNp7QoVAUc9BDAA2w4FdGfkKQw9lFQRNExg0FTbbXxFoSd0mbcI9pZYyTG1OF1xjYNjjEwNUB8To9z300OhCORgm4')


function App() {

  const [{}, dispatch] = useStateValue();


useEffect(() => {
  //will only run once when the app component loads...


//this is the data layer component connected with the firebase
  auth.onAuthStateChanged(authUser=>{  //thsi is listener for login and logout
    console.log('THE USER IS >>>> ', authUser);
    if (authUser){
      //the user just login //the user was logged in

      dispatch({
        type: 'SET_USER',  // this will push it to the data layer
        user: authUser   //this comes from the firebase
      })
    }
    else{
      //the user is logged out
  dispatch({
    type: 'SET_USER',
    user: null    
  })

    }
  } )
}, [])

  return (
//BEM naming convection so we use app not App
<Router>

    <div className="app">
      <Routes>
      <Route path="/Orders" element={<><Header/><Order/></>}>
       
  
       </Route>
      <Route path="/login" element={<><Login/></>}>
       
  
       </Route>
        <Route path="/checkout" element={<><Header/><Checkout/></>}>
       
  
        </Route>
        <Route path="/" element={<>     {/*make sure to make the default routes at the bottom i.e the home route */}
        <Header/>
      <Home/></>}>
     
        </Route>
        <Route path="/payment" element={<><Header/><Elements stripe={promise}> <Payment/> </Elements>  </>}>
       
  
        </Route>
     
    

      </Routes>


    
    </div>
    </Router>
  );
}

export default App;

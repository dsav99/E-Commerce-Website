import React, { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Checkout from "./components/Checkout";
import Login from './components/Login';
import Payment from './components/Payment'
import Orders from './components/Orders'
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useStateValue } from './StateProvider';

const promise = loadStripe('pk_test_51LDl2PAjG1pX8BsCkwyOJ91656vrbfuM9ruQWONwqyIaWNG3Yah97qPMMRyEN9wn093DcsOXsBbxGYh4Fb2lIbA800qVYl5Ajr');



function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // console.log('The User is :', authUser);

      if (authUser) {
        // User just/was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        // User is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (
    <Router>
      <div className="app">

        <Routes>

          <Route path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }>

          </Route>
          <Route path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }>
          </Route>

          <Route path='/login'
            element={
              <>
                <Login />
              </>
            }>

          </Route>

          <Route path='/payment'
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }>

          </Route>

          <Route path='/orders'
          element={
            <>
              <Header/>
              <Orders/>
            </>
          }>

          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;

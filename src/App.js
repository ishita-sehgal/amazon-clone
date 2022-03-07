import Header from './Header';
import { useEffect } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';
const promise=loadStripe("pk_test_51KQpgMSFMsoN45QR6ympDIowZcEtrq6lMwl10f3wO6vEqrJVcQNhi8lq9UhSlE8ZHPRfkjOqfTioiF2FvNzRdQir00VW6LJSv5");

function App() {
 const [{},dispatch]=useStateValue();
  useEffect(()=>{
    //will only run when the app component loads...
auth.onAuthStateChanged(authUser=>{
  console.log('the user is >>>',authUser);
  if(authUser){
  // user just logged in OR was logged in....
  dispatch({
    type: 'SET_USER',
    user:authUser
  });
  }
  else{
    // user is logged out....
    dispatch({
      type: 'SET_USER',
      user:null
    });
  }
})
  },[]);
  return (
    //BEM convention
    <Router>

    <div className="app">
      
      <Switch>

        <Route path='/payment'>
          <Header/>
          <Elements stripe={promise}>
          <Payment/>
          </Elements>
          </Route>
        <Route path='/orders'>
          <Header />
          <Orders/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
      <Route path='/checkout'>
      <Header/>
      <Checkout />
      </Route>     
      <Route path='/'>
      <Header/>
      <Home/>
      </Route>

 </Switch>
    </div></Router>
  );
}

export default App;

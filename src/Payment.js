import React, { useState, useEffect } from 'react';
import './Payment.css';
import {Link,useHistory} from 'react-router-dom';
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from './CheckoutProduct';
import {useStateValue} from './StateProvider';
import {CardElement, useElements,useStripe} from '@stripe/react-stripe-js';
import axios from './axios';
import {db,collection,doc,setDoc} from './firebase';


function Payment() {
    const history=useHistory();
    const [{basket,user},dispatch]=useStateValue();

    const stripe=useStripe();
    const elements=useElements();
const [suceeded,setSuceeded]=useState(false);
const [processing,setProcessing]=useState('');
    const [error,setError]=useState(null);
    const [disabled,setDisabled]=useState(true);
    const [clientSecret,setClientSecret]=useState(true);
useEffect(()=>{
    //generate the special stripe secret which allows us to charge a customer
    //useEffect here works everytime basket changes also we should get new client secret as payment changed

const getClientSecret=async()=>{
const response =await axios({
    method: 'post',
    //stripe expects the total in a currencies subunits   
    url:`/payments/create?total=${getBasketTotal(basket) * 100}`
});
setClientSecret(response.data.clientSecret);
}
getClientSecret();

},[basket]);

    const handleSubmit=async (e)=>{
      //stripe work
      e.preventDefault();
      console.log('THE SECRET IS >>>',clientSecret);
      setProcessing(true);

      const payload =await stripe.confirmCardPayment(clientSecret,{
          payment_method:{
              card:elements.getElement(CardElement)
          }
      }).then(async({paymentIntent})=>{
          console.log("LOOK HERE >>>>>",paymentIntent);
          //paymentIntent= payment confirmation
          const ref = collection(db, "users");
          const docRef = doc(ref,user?.uid);
          const orderref=collection(docRef,"orders");
          const REFid=doc(orderref,paymentIntent.id);
          await setDoc(REFid,{
            basket:basket,
            amount:paymentIntent.amount,
            created:paymentIntent.created
        });



      

          setSuceeded(true);
          setError(null);
          setProcessing(false);
          dispatch({
              type:"EMPTY_BASKET"
        });
         
          history.replace('/orders');
      })
    }
    const handleChange=(e)=>{
         //Listen for changes in the CardElement
         //and Display any errors as the customer types their card details
         setDisabled(e.empty);
         setError(e.error? e.error.message:"");
    }
  return(
  <div className='payment'>
   
      <div className='payment__container'>
    
          <h1>
              Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
          </h1>
  
          {/* payment section:- delivery address */}
<div className='payment__section'>
    <div className='payment__title'>
<h3>delivery Address</h3>
    </div>
<div className='payment__address'>
<p>{user?.email}</p>
<p>H24 Residency Greens, Greenwood City</p>
<p>sector-46, Gurgaon, Haryana</p>
</div>
</div>
{/* payment section:- Review Items */}
<div className='payment__section'>
<div className='payment__title'>
<h3>Review items and delivery</h3>
    </div>
    <div className='payment__items' >
{basket?.map((item,i)=>(<CheckoutProduct
id={item.id}
title={item.title}
image={item.image}
price={item.price}
rating={item.rating}
/>))}
    </div>
</div>
{/* payment section:- payment method */}
<div className='payment__section'>
<div className='payment__title'>
<h3>Payment Method</h3>
    </div>
    <div className='payment__details'>
{/* strip.js library used for payments */}
<form onSubmit={handleSubmit}>
    <CardElement onChange={handleChange}/>
    <div className='payment__priceContainer'>
    <CurrencyFormat
            renderText={(value)=>(
                  <h3>Order total: {value}</h3>
                )
            }
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
      />
      <button disabled={processing|| disabled ||suceeded}>
          <span>
              {processing? <p>processing</p>:"Buy Now"}
          </span>
      </button>
    </div>
    {error && <div>{error}</div>}
</form>
    </div>

</div>
</div>
  </div>);
}

export default Payment;

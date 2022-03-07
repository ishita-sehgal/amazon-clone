import React,{useState,useEffect} from 'react';
import './Orders.css';
import Order from './Order';
import {db,collection,doc,query,orderBy,getDocs} from './firebase';
import {useStateValue} from './StateProvider';

function Orders() {
    const [{basket,user},dispatch]=useStateValue();
    const [orders,setOrders]=useState([]);
    useEffect(async ()=>{
        if(user){
        const ref = collection(db, "users");
        const docRef = doc(ref,user?.uid);
        const orderref=collection(docRef,"orders");
        
const q = query(orderref, orderBy("created","desc"));
        // const arrangedDB=orderBy(orderref,"created","desc");
        const querySnapshot = await getDocs(q);
        // let arrData=[];
        setOrders(querySnapshot.docs.map(doc => (
            {id:doc.id,
              data:doc.data()}
       
    )));
            
            // setOrders(Array(arrData));
            console.log('hi',orders);

                  }else{
                        setOrders([]);
                  }



    },[]);


  return (
  <div className='orders'>
<h1>Your Orders</h1>
<div className='orders__order'>
{user && orders?.map(order=>(
    <Order order={order} />
))}

</div>



  </div>);
}

export default Orders;

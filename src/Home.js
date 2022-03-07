import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
    return (
        <div className="home">
          <div className="home_container">
             
              <img src="https://m.media-amazon.com/images/I/71FzQCchyoL._SX3000_.jpg" className="home_image" alt=""/>
              
              <div className="home_row">
                  <Product title="The Lean Startup" id={1} rating={5} price={457.24} image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"/>
                  <Product title="2020 Apple MacBook Air Laptop" id={2} price={110356.56} rating ={4} image="https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UY218_.jpg" />
                  
              </div> 
              <div className="home_row">
              <Product title="Samsung 24 inch (60.4 cm) IPS, 3 Side Bezel Less Flat LED Monitor" id={3} price={14546.17} image="https://images-eu.ssl-images-amazon.com/images/I/41ui6ON5ULL._AC_SX184_.jpg" rating={4}/>
               <Product title="Apple AirPods Pro" id={4} price={24980.95} image="https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UY218_.jpg" rating={4}/> 
               <Product title="Mi Smart Band 5 " id={5} price={2457.84} image="https://m.media-amazon.com/images/I/71X8NdnCsvL._AC_UL320_.jpg" rating={4}/>
              </div>
              <div className="home_row"> 
              <Product title="Samsung Galaxy Watch 3 45mm Bluetooth (Mystic Black)" id={6} price={18048.17} rating={4} image="https://m.media-amazon.com/images/I/61w674PbGRL._AC_UL320_.jpg"/>
               <Product title="Prestige PCJ 7.0 500-Watt Centrifugal Juicer" id={7} price={3104.72} image="https://m.media-amazon.com/images/I/91oCwy3CkdL._AC_UL320_.jpg" rating={3}/>
                <Product title="Nishica HE-133 Electric Hand Mixer" id={8} price={359.79} image="https://m.media-amazon.com/images/I/71Pfts5i8LL._AC_UL320_.jpg" rating={4}/> 
                <Product title="boAt Xtend Smartwatch with Alexa Built-in" id={9} price={3008.78} image="https://m.media-amazon.com/images/I/61gscZYmaoL._AC_UL320_.jpg" rating={5}/></div>
              </div>
        </div>
    )
}

export default Home

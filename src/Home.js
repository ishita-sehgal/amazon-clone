import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
    return (
        <div className="home">
          <div className="home_container">
             
              <img src="https://m.media-amazon.com/images/I/71FzQCchyoL._SX3000_.jpg" className="home_image" alt=""/>
              
              <div className="home_row">
                  <Product title="The Lean Startup" id={1} rating={5} price={19.99} image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"/>
                  <Product title="xyz" id={2} price={20} image="xyz.jpg" />
                  
              </div> 
              <div className="home_row">
              <Product title="xyz" id={2} price={20} image="xyz.jpg" rating={4}/> <Product title="xyz" id={2} price={20} image="xyz.jpg" rating={4}/> <Product title="xyz" id={2} price={20} image="xyz.jpg" rating={4}/>
              </div>
              <div className="home_row"> <Product title="xyz" id={2} price={20} rating={4} image="xyz.jpg"/> <Product title="xyz" id={2} price={20} image="xyz.jpg" rating={4}/> <Product title="xyz" id={2} price={20} image="xyz.jpg" rating={4}/> <Product title="xyz" id={2} price={20} image="xyz.jpg" rating={4}/></div>
              </div>
        </div>
    )
}

export default Home

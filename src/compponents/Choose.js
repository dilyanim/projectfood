import React from "react";
import Easy from '../img/Icon1.png'
import Live from '../img/Icon2.png'
import Organic from '../img/leaf 1.png'


function Choose(){
    return (
        <div id="choose">
            <div className="container">
                <div className="choose-title">
                    <div className="choose-t">
                     <h1>Why Choose US?</h1>
                     <p>Organic food is grown without the use of synthetic chemicals</p>
                     <div className="ch-comp">
                       <div>
                          <img src={Easy}></img>
                          <h3>Easy to order</h3>
                          <p>foods include fresh produce,  <br/>
                           meats as well as processed</p>
                       </div>
                       <div>
                          <img src={Live}></img>
                          <h3>Live Order</h3>
                          <p>Place your online Order easily  <br/>
                            and get the food instantly</p>
                      </div> 
                       <div>
                          <img src={Organic}></img>
                          <h3>100% Organic</h3>
                          <p>Organic food is grown without <br/>
                            the use of synthetic chemicals</p>
                       </div>
                     </div>
                     <div className="numbers">
                        <div>
                        <h1> 40+</h1>
                        <p>Food Partners</p>
                        </div>
                        <div>
                        <h1> 459+</h1>
                        <p>Trusted Clients</p>
                        </div>
                        <div>
                        <h1>12k+</h1>
                        <p>Order Online</p>
                        </div>
                        
                     </div>
                     
                     </div>
                </div>
             </div>  
        </div>
    )
}


export default Choose ;

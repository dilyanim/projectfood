import React from "react";
import salad1 from '../img/salad1.png'
import salad2 from '../img/salad2.png'
import salad3 from '../img/salad3.png'


function Dish(){
    return (
        <div id="dish">
            <div className="container">
                <div className="dish-title">
                     <div className="d-1">
                             <h1>Special Dishes for you</h1>
                             <p>Made with premium & 100% Organic ingredients</p>
                     </div>

                     <div className="d-2">
                            <div className="d-2a">
                                <img src={salad1}></img>
                                <h3>Green Salad</h3>
                                <p>A salad combined witha delicious <br/>
                                   cut of bacon and mixed with tasty  <br/>
                                   and fresh sesome oil.</p>

                            </div>
                             <div className="d-2b">
                                 <img src={salad2}></img>
                                 <h3>Beef Salad</h3>
                                <p>A salad combined witha delicious <br/>
                                   cut of bacon and mixed with tasty  <br/>
                                   and fresh sesome oil.</p>
                                  
                            </div>
                               
                             <div className="d-2c">
                                 <img src={salad3}></img>
                                 <h3>Nut Salad</h3>
                                <p>A salad combined witha delicious <br/>
                                   cut of bacon and mixed with tasty  <br/>
                                   and fresh sesome oil.</p>
                             </div>
                     </div>
                     <button className="d-btn">View All</button>
                     
                </div>
             </div>  
        </div>
    )
}


export default Dish ;
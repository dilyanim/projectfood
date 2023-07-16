import React from "react";
import eat from '../img/header Image.png'
import grass from '../img/grass.png'
import grass2 from '../img/grass2.png'
import grass3 from '../img/grass3.png'





function Hero(){
    return (
        <div id="hero">
            <div className="container">
                <div className="hero-title">
                    <div className="hero-text">
                       <h1>Just <span className="hero-sub">Eat healthy </span>  <br/>
                        food to live a    <br/>
                         healthier life</h1>

                         <p>Enjoy a healthy life by eating healthy foods 
                            that have extraordinary flavors that make  
                            your life healthier for today and in the future</p>


                            <button className="hero-btn">Order Now</button>
                           
                            
                    </div>
                    <div>
                          <img   src={eat}></img>
                          <img className="img1g"  src={grass}></img>   
                          <img className="img2g" src={grass2}></img>
                          <img className="img3g" src={grass3}></img>
                    </div>
                    
                         
                        
                   
                  
                </div>
             </div>  
        </div>
    )
}


export default Hero ;
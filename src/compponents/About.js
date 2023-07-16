import React from "react";
import cocos from '../img/cocos.png'
import fruit from '../img/fruit.png'
import green from '../img/lime.png'




function About(){
    return (
        <div id="about">
            <div className="container">
                <div className="about-title">
                  <div className="ab-tit">
                      <h1>About US</h1>
                      <p>Organic food is grown without the use of <br/>
                         synthetic chemicals, such as human-made     <br/>
                         pesticides and fertilizers, and does not contain   <br/>
                         genetically modified organisms (GMOs).   <br/>
                         Organic foods include fresh produce, meats,   <br/>
                         and dairy products as well as processed foods   <br/>
                         such as crackers, drinks, and frozen meals.</p>
                         <button className="ab-btn">Learn More</button>
                  </div>
                  <div className="ab-img">
                       <div className="ab-img1">
                              <img className="ab-imga" src={cocos}></img> <br/>
                              <img src={fruit}></img>
                       </div>
                       
                    <div ab-img2>
                       <img src={green}></img>
                    </div>
                         
                       
                  </div>
                </div>
             </div>  
        </div>
    )
}


export default About ;
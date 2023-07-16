import React from "react";
import food from '../img/UI.desk.png'
import search from '../img/search.png'


function Header(){
    return (
        <div id="header">
            <div className="container">
                <div className="header-title">
                  <img src={food}></img>
                  <div className="header-nav">
                    <a className="header-a" href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Testimonials</a>
                  </div>
                  <div className="header-icons">
                      <img src={search}></img>
                  </div>
                  <button className="header-btn">Order Now</button>
                </div>
             </div>  
        </div>
    )
}


export default Header ;







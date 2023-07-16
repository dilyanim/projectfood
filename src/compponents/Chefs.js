import React from "react";
import check from '../img/check mark.png'
import chef from '../img/image 6.png'
import  cook from '../img/Image & bg elements.png'


function Chefs(){
    return (
        <div id="chefs">
            <div className="container">
                <div className="chefs-title">
                  <div className="ch-tit">
                      <h1>Cooked by the <br/>
                          Best Chefs</h1>
                          <h6>Believing neglected so so allowance existence  <br/>
                            departure in. In design active temper be    <br/>
                            uneasy. Thirty for remove plenty regard you   <br/>
                            summer though. He preference connection   <br/>
                            astonished on of ye.</h6>

                            <div className="ch-img">
                            <div className="img1">
                            <div>
                            <img src={check}></img>
                            </div>
                            <div>
                            <p>A guaranteed delicious meal</p>
                            </div>
                           </div>
                           <div className="img1">
                            <div>
                            <img src={check}></img>
                            </div>
                            <div>
                            <p>Food is guaranteed hygienic</p>
                            </div>
                           </div>
                           <div className="img1">
                            <div>
                            <img src={check}></img>
                            </div>
                            <div>
                            <p>Cooked quickly</p>
                            </div>
                           </div>
                  </div>
                  </div>
                 
                  <div>
                    <img src={cook}></img>
                  </div>
                  
                </div>
             </div>  
        </div>
    )
}


export default Chefs ;
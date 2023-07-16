import React from "react";
import avatar from '../img/avatar.png'
import avatar2 from '../img/avatar (1).png'
import arrow from '../img/Arrows.png'



function Clients(){
    return (
        <div id="clients">
            <div className="container">
                <div className="client-title">
                     <div className="cl-1">
                            <h1>Happy Clients Says</h1>
                     </div>
                     <div className="cl-2">
                             <div className="cl-sub">
                               <div className="cl-2a">
                                 <div>
                                    <img src={avatar}></img>
                                </div>
                                <div className="cl-tit">
                                    <h5>KHALIL NAZIR</h5>
                                    <h6>CEO of UI.Desk</h6>
                                </div>
                               </div>
                                <p>Thirty for remove plenty regard you summer though. <br/>
                                     He preference Partiality on or continuing in particular   <br/>
                                      principles as. Do believing oh disposing to supported     <br/>
                                      allowance we.</p>
                             </div>
                             <div className="cl-sub">
                                <div className="cl-2b">
                                <div>
                                    <img src={avatar2}></img>
                                </div>
                                <div className="cl-tit">
                                    <h5>ZEESHAN ANWER</h5>
                                    <h6>CEO of UI Box</h6>
                                </div>
                                </div>
                                <p>Really boy law county she unable her sister. Feet you    <br/>
                                    off its like like six. Among sex are leave law built now.    <br/>
                                     In built table in an rapid blush. Merits behind on afraid   <br/>
                                     or warmly.
                                   </p>
                             </div>
                           


                     </div>
                     <img  className="cli-img"   src={arrow}></img>
                </div>
             </div>  
        </div>
    )
}


export default Clients ;
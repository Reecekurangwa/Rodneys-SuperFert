import React from "react";

import cropsfield from '../../assets/crops-field.png';


const FirstSection = () => {
    return (

        <>
            <section className="first-sectionn">
                <img src={cropsfield} alt="" className="crops-bg" />  
                <div className="blur-overlay"></div>

                <div className="text-boxes">

                    <div className="text-box1">
                        <h2 className="h2"> News & Events. </h2>
                    </div>

                    <div className="text-box2">
                        <div className="upper-text">
                            <p>Next Events</p>
                            <p>| Roadshow // 27 May 2023</p>
                        </div>

                        <div className="middle-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>

                        <div className="lower-text">
                            <p className="one">01</p>                   
                        </div>

                    </div>

                </div>
                <div className="lower-text2">
                    <p className="four">/04</p>                   
                </div>
                
            </section>






        </>
    );

}

export default FirstSection;
import React from "react";

import warehouse from '../../assets/warehouse.png';
import overlay from '../../assets/overlay.png';

const AboutSection = () => {
    return (

        <>
            <section className="about-section">

                <div className="image-stack">
                    <img src={warehouse} alt="" className="warehouse-bg" />
                    <img src={overlay} alt="" className="overlay-pic" />
                    <div className="vertical-line-container">
                        <span className="vertical-line"></span>
                    </div>
                    <div className="text-box">
                        <h2>Made on Zimbabwean soil, for Africa’s soil.</h2>
                        <p>SuperFert Fertilizer is manufactured in Zimbabwe, and proudly serves to enrich the soils of Africa.</p>   
                    </div>
                </div>

                
            </section>






        </>
    );

}

export default AboutSection;
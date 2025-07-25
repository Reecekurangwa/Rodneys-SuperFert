import React from "react";

import cropsfield from '../../assets/crops-field.png';


const FirstSection = () => {
    return (

        <>
            <section className="first-section">

                <h2 className="h2"> Who we are.</h2>
                <img src={cropsfield} alt="" className="crops-bg" />
                <div className="blur-overlay"></div>
                
            </section>






        </>
    );

}

export default FirstSection;
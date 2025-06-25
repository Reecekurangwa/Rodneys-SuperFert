import React from "react";
import fsg1 from '../../assets/fsg_logo-bg.png';
import nashtestedlogo from '../../assets/national-testedbg.png';
import seedco from '../../assets/seedco_logo.png';
import starke from '../../assets/starke_logo-bg.png';

const SponsorsSection = () => {
    return (

        <>
            <section className="Sponsors-section">
                <div className="text-box">
                    <h2>Fertilisers.Seed.Grain.</h2>
                    <p>SuperFert Fertilizer is powered by the FSG Company and is a proud partner of</p>    
                </div>
                <div className="image-stack">
                    <img src={seedco} alt="" className="seedco-logo" />
                    <img src={starke} alt="" className="starke-logo" />
                    <img src={nashtestedlogo} alt="" className="nashtested-logo" />
                    <img src={fsg1} alt="" className="fsg-logo" />
                    <img src={seedco} alt="" className="seedco-logo" />
                </div>
            </section>






        </>
    );

}

export default SponsorsSection;
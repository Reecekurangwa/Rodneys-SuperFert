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
                    {/* Seedco Logo Link */}
                    <a href="https://www.seedcogroup.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Seedco website">
                        <img src={seedco} alt="Seedco Logo" className="seedco-logo" />
                    </a>

                    {/* Starke Logo Link */}
                    <a href="https://www.starkeayres.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Starke Ayres website">
                        <img src={starke} alt="Starke Ayres Logo" className="starke-logo" />
                    </a>

                    {/* National Tested Logo Link */}
                    <a href="https://www.natseeds.co.zw/" target="_blank" rel="noopener noreferrer" aria-label="Visit National Tested Seeds website">
                        <img src={nashtestedlogo} alt="National Tested Seeds Logo" className="nashtested-logo" />
                    </a>

                    {/* FSG Logo Link */}
                    <a href="https://www.fsg.co.zw/" target="_blank" rel="noopener noreferrer" aria-label="Visit FSG website">
                        <img src={fsg1} alt="FSG Logo" className="fsg-logo" />
                    </a>

                    {/* Duplicate Seedco Logo Link (as per your original JSX) */}
                    <a href="https://www.seedcogroup.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Seedco website">
                        <img src={seedco} alt="Seedco Logo" className="seedco-logo" />
                    </a>
                </div>
            </section>
        </>
    );
}

export default SponsorsSection;

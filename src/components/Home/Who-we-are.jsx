import React from "react";


import farmer from '../../assets/farmer_img.jpg';

const WhoWeare = () => {
    return (

        <>

            <section className="who-we-are-section">
                <div className="left-content">
                    <span className="vertical-line2"></span>
                    <span className="who-we-are-text">
                        <h2>WHO WE ARE.</h2>
                        <p>We operate nationwide in association with experienced third party distributors of agricultural inputs. Our internal transport and logistics division provides consistently reliable stock levels to large commercial and corporate farming enterprises nationwide, as well as retail outlets ensuring our retail partners are able to provide easily accessible and competitively priced fertilizers to all rural and small scale farmers.</p>
                    </span>
                </div>
                <div className='right-content'>
                    <img src={farmer} alt="smiling" className='farmer-pic' />
                </div>
            </section>







        </>
    );

}

export default WhoWeare;
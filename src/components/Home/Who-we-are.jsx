import React from "react";


import farmer from '../../assets/farmer_img.jpg';

const WhoWeare = () => {
    return (

        <>

            <section className="who-we-are-section">

                <div className="text-box">
                    <h2>Who We Are.</h2>
                    <p>We operate nationwide in association with experienced third party distributors of agricultural inputs. Our internal transport and logistics division provides consistently reliable stock levels to large commercial and corporate farming enterprises nationwide, as well as retail outlets ensuring our retail partners are able to provide easily accessible and competitively priced fertilizers to all rural and small scale farmers.</p>
                    
                </div>
                <div className="farmer-div">
                    <img src={farmer} alt="smiling" className='farmer-pic' />
                </div>
                <div className="green-line"> </div>
            </section>







        </>
    );

}

export default WhoWeare;
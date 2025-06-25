import React from "react";


import bags from '../../assets/bags.png';
import fsg2 from '../../assets/fsg_logo2.png';
import seedco from '../../assets/seedco_logo.png'
import starke from '../../assets/starke_logo.png'
import testedseeds from '../../assets/testedseeds_logo.png'
import plough from '../../assets/plough.jpg';
import bag from '../../assets/bag.png'
import field from '../../assets/field.jpg'


const ProductsSection = () => {
    return (

        <>

            <section className='products-section'>
                <h2>SuperFert Products.</h2>
                <img src={superfert} alt="logo" className='superfert-logo' />
                <img src={bags} alt="bags" className='super-bags' />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>


                <div className='rectangle-1'>
                    <div className="rotated-rectangle">
                        <img src={plough} alt="tractor" className='tractor-behind' />
                        <img src={bag} alt="bag" className='mini-bag' />
                        <h3>Tobacco Fertilizer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore.</p>
                    </div>
                </div>

            </section>




        </>
    );

}

export default ProductsSection;
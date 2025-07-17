import React from "react";
import group2 from '../../assets/group_2.png';
import superfert from '../../assets/superfert_logo.png'
import Btn from "../Btn"; // Assuming Btn.jsx is directly in src/components/

const HeroSection = () => {
    // Define the click handler function *inside* the HeroSection component
    // You can rename this to something more specific to the button's action in the HeroSection
    const handleHeroButtonClick = () => {
        alert("You clicked the button in the Hero Section!");
    };

    return (
        <>
            <section className="hero">

                <img src={superfert} alt="Superfert Logo" className='superfert-logo' />
                <div className='hero-content'>
                    <h1>The Formula for Success, Naturally.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    <Btn className="btn-blue" onClick={handleHeroButtonClick}>Contact Us</Btn>
                </div>
                <div>
                    <img src={group2} alt="Group 2" className='hero-image' />
                </div>

            </section>
        </>
    );
}

export default HeroSection;
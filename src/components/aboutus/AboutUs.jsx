import React from 'react';
import './AboutUs.css';
import aboutImage from './img/about-us.jpg';

function AboutUs() {
    return(
        <div className='container'>
            <section className="about-us">
                <div className="about-us__container">
                    <div className="about-us__image">
                        <img src={aboutImage} alt="About Us" />
                    </div>
                    <div className="about-us__content">
                        <h2>About Me</h2>
                        <p>Welcome to our company! We are dedicated to delivering exceptional services and creating value for our customers. Our team of professionals works tirelessly to bring innovative solutions to every project, ensuring quality and efficiency.</p>
                        <p>With years of experience, we are committed to meeting the needs of our clients and exceeding their expectations. Join us on our journey to make a difference and create impactful experiences.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
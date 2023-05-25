import React from "react";
import oceanView from '../../assets/images/portfolioPic.jpeg'

import './_about.scss';

const About = () => {

    return (
        <div id="about" className="wrapper">
            <div className="about">
                <h3 className="about-head triangle"> About Me</h3>
                <h4 className="about-head__title">Creative, Globetrotter, Coffeeholic, Developer</h4>
                <div className="about-body">
                    <div className="about-body__content">

                        <p> I'm a UX/UI and Full-stack web developer.</p>

                        <p> With a work history in customer service and degree in Psychology I have a love of observing and understanding the how and why people do the things they do.</p>

                        <p className="about-body__p"> “A jack of all trades is a master of none, but oftentimes better than a master of one.” </p>
                        
                        <p> Years of experience as a coffee roaster have helped me develop great problem solving skills needed for web development. </p>

                        <p> Fan of hiking, coffee, and art</p>


                    </div>
                    <div className="hexa">
                        <div className="hex1">
                            <div className="hex2">
                                <img src={oceanView} alt="me on a hike with the ocean behind me" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
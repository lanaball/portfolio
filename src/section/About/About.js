import React from "react";
import oceanView from '../../assets/images/portfolioPic.jpeg'

// IMPORT: in your APP.js or any component file
import { motion } from 'framer-motion';

import './_about.scss';

const About = () => {

    return (
        <div id="about" className="wrapper">
            <div className="about">
                <h3 className="about-head triangle-steady"> About Me</h3>
                <h4 className="about-head__title">Creative, Globetrotter, Coffeeholic, Developer</h4>
                <div className="about-body">
                    <div className="about-body__content">

                        <p> I'm a recent graduate in UX/UI Design and Web Development.</p>

                        <p> With a work history in New Zealand, the UK and Canada, and a degree in Psychology I have a love of observing and understanding the how and why people do the things they do.</p>

                        <p className="about-body__p"> “A jack of all trades is a master of none, but oftentimes better than a master of one.” </p>

                        <p> Years of experience as a coffee roaster has helped me develop strong skills in teamwork and problem solving needed for web development. </p>

                        <a href=""> <p> Let's get a coffee </p> </a>


                    </div>
                    <div className="hexa-container">
                        <motion.div animate={{ y: [0, 50, 0], transition: { duration: 5, repeat: Infinity, ease: "linear" } }} initial={{ x: 20 }}>
                            <div className="hexa">
                                <div className="hex1">
                                    <div className="hex2">
                                        <img src={oceanView} alt="me on a hike with the ocean behind me" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
// IMPORTS
import React from "react";
import oceanView from '../../assets/images/portfolioPic.jpeg'
import { motion } from 'framer-motion';

// COMPONENTS
import AsideBar from '../../components/AsideBar/AsideBar';
import Navbar from '../../components/Navbar/Navbar';
import Skills from "../Skills/Skills";

// STYLE
import './_about.scss';


const About = () => {

    return (
        <>
            <AsideBar />
            <Navbar />
        
        <div id="about" className="wrapper">
            <div className="about">
                <h1 className="about-head triangle-steady"> About Me</h1>
                <h4 className="about-head__title">Creative, Globetrotter, Coffeeholic, Developer</h4>
                <div className="about-body">
                    <div className="about-body__content">

                        <p> I'm a recent graduate in UX/UI Design and Web Development.</p>

                        <p> With a work history in New Zealand, the UK and Canada, and a degree in Psychology I have an interest in observing and understanding the how and why people do the things they do.</p>


                        <p className="about-body__p"> “A jack of all trades is a master of none, but oftentimes better than a master of one.” </p>

                        <p> Years of experience as a coffee roaster has helped me develop strong skills in teamwork and problem solving needed for web development. </p>

                        <a href="mailto:allana.m.kennedy@gmail.com"> <p> Let's get a coffee </p> </a>


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

            <Skills />
            </>
    )
}

export default About;
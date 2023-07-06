// IMPORTS
import React from "react";
import oceanView from '../../assets/images/portfolioPic.jpeg';
import { Link } from 'react-router-dom';
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

            <div id="about" className="about">

                <h1 className="about-head triangle-steady"> About Me</h1>
                <h4 className="about-head__title">Creative, Globetrotter, Coffeeholic, Developer</h4>
                <div className="about-body">
                    <div className="about-body__content">

                        <p> I'm a recent graduate in UX/UI Design and Web Development.</p>

                        <p> With a work history in New Zealand, the UK and Canada, and a degree in Psychology I have an interest in observing and understanding the how and why people do the things they do.</p>

                        <p> Years of experience as a coffee roaster has helped me develop strong skills in teamwork and problem solving needed for web development. </p>

                        <p> I’m a fast learner, able to pick up new skills and juggle different projects and roles with relative ease. I like to develop expertise in a number of areas over the course of my life and career.
                        </p>

                        <p className="about-body__p"> “A jack of all trades is a master of none, but oftentimes better than a master of one.” </p>

                        <a href="mailto:allana.m.kennedy@gmail.com"> <p> Let's get a coffee </p> </a>


                    </div>
                    <div className="hexa-container">
                        <motion.div animate={{ y: [0, 200, 0], transition: { duration: 5, repeat: Infinity, ease: "linear" } }} initial={{ x: 0 }}>
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


            <Skills />
            <div className="about-footer">
                <Link to="/contact"> <a className="btn contact-btn" href="#" >Contact</a>
                </Link>
            </div>


        </>
    )
}

export default About;
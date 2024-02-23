// IMPORTS
import React from "react";
import oceanView from '../../assets/images/portfolioPic.jpg';
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
   
        <div id="about" className="about wrapper">
            
    <h1 className="about-head"> About Me</h1>
    <h4 className="about-head__title">Creative, Globetrotter, Coffeeholic, Developer</h4>
    <div className="about-body">
        <div className="about-body__content">
            <p> I am a recent graduate in UX/UI Design and Web Development, making a deliberate career transition after two decades of working in the hospitality industry. My professional journey has taken me across the world, including New Zealand, Australia, the UK, and Canada, my global experiences have instilled adaptability, resilience, and an open-minded approach to problem-solving.
            <br /> 
            <br /> 
            With a unique foundation as a coffee roaster, I've cultivated a strong teamwork ethic and problem-solving skills—qualities that translate into the collaborative and solution-oriented nature of web development. The years of refining my craft in the art of roasting have not only deepened my appreciation for meticulous detail but also fostered a keen sense of creativity and innovation.
            <br />
            <br /> 
            Outside the office you'll find me dreaming of long hikes, swimming, reading and saying hello to all the dogs.
            </p>

            <a href="mailto:allana.m.kennedy@gmail.com"> <p> Let's get a coffee </p> </a>
                </div>
              
    <div className="hexa-container">
                    <motion.div style={{ width: "fit-content" }}
                        
                        animate={{ x: [0, 500, 0], transition: { duration: 50, repeat: Infinity, ease: "linear" } }} initial={{ x: 0 }}
                    
           
                    >
        <div className="hexa">
            <div className="hex1">
                <div className="hex2">
                    <img src={oceanView} alt="me on a hike with the ocean behind me" />
                 </div>
            </div>
        </div>
        </motion.div>
    </div>
<Skills />
   </div> 
    <div className="about-footer">
        <Link to="/contact"> <a className="btn contact-btn about-btn" href="#" >Contact</a>
        </Link>
    </div>
  </div>
    </>
    )
}
export default About;
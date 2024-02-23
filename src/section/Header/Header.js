import React from "react";
import { motion } from "framer-motion";
import './_header.scss';



const Header = () => {

    return (
    <>
    <div id="header" className="hero__wrapper">
        <div className="wrapper">
    <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }} >
   
    <h1 className="heading_primary">Kia Ora, I'm <span className="hero__name triangle-steady"> llana.</span> </h1>
                              
    <p className="text_primary">I'm a creative Web Developer and UX Designer <br /> with a coffee roaster's mind for problem solving</p>
               
    <div className="triangle-body">
        <div className="logo">
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            <div className="triangle"></div>
            </div>
        </div>
    </motion.h1>  
            </div>
        </div>
        </>)
}

export default Header;
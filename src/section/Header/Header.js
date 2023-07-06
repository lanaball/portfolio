import React from "react";
import { motion } from "framer-motion";
import './_header.scss';

const Header = () => {

    return (
        <>
            <div id="header" className="hero__wrapper">
                <div className="wrapper">
                    <motion.h1
                        animate={{ x: [0, 150, 0], opacity: 1, scale: 1 }}
                        transition={{
                            duration: 3,
                            delay: 0.3,
                            // ease: [0.5, 0.71, 1, 1.5],
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                    >
                    <h1 className="heading_primary">Kia Ora, I'm <br /><span className="hero__name triangle-steady"> llana.</span> </h1>
                   
                   
                     <div>
                        <p className="text_primary">I'm a creative Web Developer and UX Designer with a coffee roaster's mind for problem solving</p>
                    </div>
                    </motion.h1>  
                    <div className="triangle-body wrapper">
                        <div className="logo">
                            <div className="triangle"></div>
                            <div className="triangle"></div>
                            <div className="triangle"></div>
                            <div className="triangle"></div>
                        </div>
                    </div>

                </div>
            </div>
        </>)
}

export default Header;
import React from "react";
import './_header.scss';

const Header = () => {

    return (
        <>
            <div id="header" className="hero__wrapper">
                <div className="wrapper">
                    <h1 className="heading_primary">Kia Ora, I'm <br /><span className="hero__name triangle-steady"> llana.</span> </h1>
                    <div>
                        <p className="text_primary">I'm a creative Web Developer and UX Designer with a coffee roaster's mind for problem solving</p>
                    </div>

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
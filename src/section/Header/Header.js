import React from "react";
import './Header.scss';

const Header = () => {

    return (
        <>
            <div className="hero__wrapper">
                <div className="wrapper">
                    <h1 className="heading_primary">Kia Ora, I'm <span className="hero__name triangle"> llana.</span> </h1>
                    <div>
                        <p className="text_primary">I'm a full-stack web developer with a coffee roasters mind for problem solving, and a passion for
                            inclusive and compassionate teamwork</p>
                    </div>
                    <div className="home_cta">
                        <a href="./#projects" className="btn proj-btn">Projects</a>
                    </div>
                </div>
            </div>
        </>)
}

export default Header;
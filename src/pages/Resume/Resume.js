// IMPORTS
import { Link } from 'react-router-dom';
import React from 'react';

// COMPONENTS
import AsideBar from '../../components/AsideBar/AsideBar';
import Navbar from '../../components/Navbar/Navbar';

// STYLE
import './_Resume.scss';

const Resume = () => {
    return (
        <>
            <AsideBar />
           <Navbar />

            <main className='wrapper'>
                <div className='resume'>
                    <h1 className='resume-head triangle-steady'> Resume</h1>
                    <p className='resume-head__p'>This is a short version, please  <a className='resume-a'  href="mailto:allana.m.kennedy@gmail.com" > get in touch </a>  for the full version</p>

                    <section className='resume-body'>
                        <h5>Key Attributes</h5>
                        <ul className='resume-body__sec'>
                            <li>
                                Strong organisational and problem-solving abilities.
                            </li>
                            <li>
                                Excellent communication and interpersonal skills.
                            </li>
                            <li>
                                Detail-oriented with a focus on quality and efficiency.
                            </li>
                        </ul>
                    </section>

                    <section className='resume-body'>
                        <h5>Work Experience</h5>
                        <div className='work'>
                            <a href="https://nimbl.nz/" target="_blank" rel="noreferrer"> Nimbl - Digital Agency </a>
                            <p>Web Developer </p>
                            <p>Auckland, New Zealand  <span> 2023-present </span> </p>
                            <ul className='nimbl'>
                                <li>Lead the creation of WordPress websites using tools like Elementor, CSS, PHP, and Javascript, ensuring a seamless and engaging online experience for users. </li>
                                <li> Employ industry-recommended practices in web development, emphasizing responsive design and SEO optimization, to deliver visually appealing and user-friendly websites.</li>
                                <li>Proficiently maintain and troubleshoot WordPress websites, swiftly addressing issues to uphold optimal functionality and user satisfaction.</li>
                                
                                </ul>

                            

                             {/* <a href="https://outpostcoffee.com/" target="_blank" rel="noreferrer" className='outpost'> Outpost Coffee Roasters  </a>
                            <p>Roaster, Operations Manager, Social Media Manager </p>
                            <p>Toronto, Canada  <span> 2015-2022 </span> </p>
                            <ul>
                                <li>
                                    Managed multiple social media accounts with a consistent weekly publishing schedule. Created engaging social media campaigns, including challenges and giveaways, to increase brand awareness and customer engagement.
                                </li>
                                <li>
                                    Developed and launched the innovative "Coffee For Change" initiative, raising over CAD$3,000 for charities in Toronto and showcasing illustrations by a coworker.
                                </li>
                                <li>
                                    Maintained and curated a coffee blog on a Shopify account, sharing industry insights, brewing tips, and showcasing Outpost Coffee Roasters' products.
                                </li>
                                </ul>
 */}

                        
                        </div>
                      
                    </section>

                    <section className='resume-body'>
                        <h5>Education</h5>
                        <ul className='resume-body__sec'>
                            <li>
                                Diploma in Web and UX Design. (2022-2023) <br /> Yoobee, Auckland, New Zealand.
                            </li>
                            <li>
                                Certificate in Web Development. (2022) <br /> Yoobee, Auckland, New Zealand.
                            </li>
                            <li>
                                Certificate in UX/UI Design.(2023) <br /> Yoobee, Auckland, New Zealand.
                            </li>
                            <li>
                                Bachelor of Arts with Honours, Psychology. (2003-2006) <br /> University of Canterbury, Christchurch, New Zealand
                            </li>
                        </ul>
                    </section>

                    <section className='resume-body'>
                        <h5>Additional Skills</h5>
                        <ul className='resume-body__sec'>
                            <li>
                                Proficient in HTML, CSS, and JavaScript.
                            </li>
                            <li>
                                Experience with back-end technologies such as Node.js and Express.
                            </li>
                            <li>
                                Familiarity with front-end frameworks like React and PHP.
                            </li>
                            <li>
                                Building intuitive user interfaces and implementing user experience best practices.
                            </li>
                        </ul>
                    </section>

                    <Link to="/contact"> <a className="btn contact-btn resume-btn" href="#" >Contact</a>
                    </Link>
                </div>

            </main>

        </>
    )
}

export default Resume;
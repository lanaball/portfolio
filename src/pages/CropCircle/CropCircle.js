// COMPONENTS
import BackButton from '../../components/BackButton/BackButton';

// STYLE
import './_CropCircle.scss';

// IMAGES
// import Moodbd from '../../assets/images/cropcircle/Group 41.png';
import hifimob from '../../assets/images/cropcircle/Frame 54.png';
import hifidesk from '../../assets/images/cropcircle/Frame 53.png';
import hifidesk2 from '../../assets/images/cropcircle/Frame 52.png';
import code1 from '../../assets/images/cropcircle/code1.png';
import code2 from '../../assets/images/cropcircle/code2.png';
import code3 from '../../assets/images/cropcircle/code3.png';
import landingPage from '../../assets/images/cropcircle/Lading - Desktop.png';




export default function CropCircle() {

    return (
        <>

            {/* <AsideBar /> */}
            <div className='main-page'>
                {/* <header className='main-page__header'> */}
                <BackButton />
                {/* </header> */}
                <main className='main-page__body'>
                    <div className='column-left'>
                        <div className='circle'>
                            <img src={landingPage} alt="moodboard for cropcircle" />
                           
                        </div>
                    </div>

                    <div className='column-right'>
                        <div className='content'>
                            <h1>Crop Circle</h1>
                            <h2>About</h2>
                            <p>
                                Food waste is a very real problem within Aotearoa and brings numerous environmental, financial and social implications. Seasonal, fresh produce, such as fruit and vegetables, have an even shorter shelf life than many other food items and therefore pose further challenges on how to prevent waste of this food group.
                            </p>
                            <p>
                                Crop Circle was created to encourage members of the community to share the surplus of their private produce bounties with others for free; in exchange for a helping hand in the harvest; or as a swap for other produce that they may be on the hunt for.
                            </p>

                            <section>
                                <h2>My Role</h2>
                                <p>
                                    This was a group project, the Crop Circle team had two members, and we had equal responsibilities in design and development and we really leaned heavily on each other to take a task and run with it. We both had to go beyond our capabilities, to keep the development up to speed, deliver, iterate, test and achieve the MVP.
                                </p>
                            </section>
                           

                            <section>
                                <h2>Design</h2>
                                <p> 
                                    We wanted a fun and bright site, we played around with a few names but ultimately loved the fun and weird name Crop Circle. With this name and with being about produce we thought the round imagery and bright colors of fruits would work well.
                                </p>
                                {/* <img src={Moodbd} alt="moodboard for cropcircle" /> */}
                            </section>
                             <hr />
                            <section>
                                <img className='content-image' src={hifimob} alt="moodboard for cropcircle" />
                                <img className='content-image' src={hifidesk2} alt="moodboard for cropcircle" />
                                <img className='content-image' src={hifidesk} alt="moodboard for cropcircle" />
                            </section>


                            <section>
                                <h2>Development</h2>
                                <p>
                                    We created an application that allows users to Create, Read, Update, and Delete (CRUD) listings using a React framework. The application provides a seamless platform for users to participate in trading, assuming dual roles as both "sellers" and "buyers" within a unified profile. "Sellers" can offer their surplus produce, while "buyers" can acquire the produce either for free or through barter, including labor or other produce.
                                </p>
                                <img className='content-image' src={code1} alt="moodboard for cropcircle" />
                                <img className='content-image' src={code2} alt="moodboard for cropcircle" />
                                <img className='content-image' src={code3} alt="moodboard for cropcircle" />

                                <p>
                               This  project was more complex than expected. The research that we both had to do into  getting our MVP requirements working took more time than we had originally planned for. 

                                Our team size and limited time frame made getting to our first MVP difficult and we had to revaluate our MVP and reduce the functions of the project. 
                                </p>
                                <p>
                                    Crop Circle is a beautifully designed and functioning app tha we are both proud of. We achieved our revised MVP and can’t wait to hear the clients feedback
                                </p>
                            </section>
                            
                          

                            <div className='content__box'>
                                <a className='btn project-btn' target='blank' rel="noreferrer" href="https://github.com/lanaball/CropCircle.git">GitHub Repository</a>

                                <a className='btn project-btn' target='blank' rel="noreferrer" href="https://www.figma.com/proto/NamMEkQC9U6BPTwPkt0qiH/Summative-3.0---Bookwork?type=design&node-id=68-934&scaling=contain&page-id=0%3A1&starting-point-node-id=3%3A82&show-proto-sidebar=1&mode=design">Figma Report</a>

                                  <a className='btn project-btn' target='blank' rel="noreferrer" href="https://www.figma.com/proto/uO9QfCLfT9GqZHQvvIGsTQ/DESIGN-FILES?page-id=0%3A1&type=design&node-id=80-1893&viewport=-254%2C684%2C0.07&scaling=min-zoom&starting-point-node-id=80%3A1893&show-proto-sidebar=1&mode=design">Figma Prototype</a>

                                <a className='btn project-btn' href="./#projects">More Projects</a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
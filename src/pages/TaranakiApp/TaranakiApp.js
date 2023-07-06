// COMPONENTS
import BackButton from '../../components/BackButton/BackButton';

// STYLE
import './_taranakiApp.scss';

// IMAGES
import taranakiApp from '../../assets/images/taranaki/Group 55.png';
import taranakiMB from '../../assets/images/taranaki/moodbrdT.png';
import code4 from '../../assets/images/taranaki/code6.png';
import taranakiMock from '../../assets/images/taranaki/mockup-taranaki3.png';


export default function TaranakiApp() {

    const pageTitle = "Taranaki App"

    return (
        <>
            <div className='main-page'>
                <BackButton pageTitle={pageTitle} />

                <main className='main-page__body'>
                    <div>
                        <img className='main-page__image' src={taranakiMock} alt="figma prototype for taranaki booking app" />
                    </div>

                    <div className='content'>
                        <div>
                            <h2>Digital Booking Accommodation Application</h2>

                            <section>
                                <h2>About</h2>
                                <p> When the mountain and sea is calling...you need to visit Taranaki. This digital booking accommodation application allows users to book accommodation in Taranaki. </p> 

                                <p>Single page web application with javascript and scss as main frameworks. This project will allow users to book accommodation in Taranaki with some restrictions. The first part of the user experience involves visitors to a specially designed site inputting information and being shown accommodation options and related details based on the number of people in their party and the length of time they intend to be staying. The second part involves displaying meal options for the chosen accomodation option. </p>
                            </section>

                            <section>
                                <h2>Design</h2>
                                <img className='main-page__image' src={taranakiMB} alt="moodboard for taranaki booking app" />
                            </section>

                            <section>
                                <h2>Development</h2>
                                <p>
                                    Data was stored in JSON files and conditionally rendered using javascript. It was important throughout this project to have naming protocols associated with functions and classes so code fragments could be found easily thought the file structure.
                                    To view, best viewport size width: 400px.
                                </p>
                                <img src={code4} alt="code for taranaki booking app" />
                            </section>

                            <div className='content__box'>
                                 <a className='btn project-btn' target='blank' rel="noreferrer" href="https://www.figma.com/proto/Z8tnXaBAZWDSKeFkPlJOPy/Taranaki-Stay?page-id=0%3A1&type=design&node-id=27-20&viewport=568%2C301%2C0.13&scaling=contain&starting-point-node-id=1%3A2&mode=design">Figma Design</a>
                                <a className='btn project-btn' target='blank' rel="noreferrer" href="https://github.com/lanaball/Accommodation-App--Javascript.git">GitHub Repository</a>
                                <a className='btn project-btn' href=" https://lanaball.github.io/Accommodation-App--Javascript/">View</a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
};
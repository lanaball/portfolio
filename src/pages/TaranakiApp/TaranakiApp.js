// COMPONENTS
import BackButton from '../../components/BackButton/BackButton';

// STYLE
import './_taranakiApp.scss';

// IMAGES
import taranakiApp from '../../assets/images/taranaki/Group 55.png';
import taranakiMB from '../../assets/images/taranaki/tarana.png';
import code4 from '../../assets/images/taranaki/code1.png';
import code5 from '../../assets/images/taranaki/code2.png';



export default function TaranakiApp() {


    return (
        <>
            <div className='main-page'>
                <BackButton />

                <main className='main-page__body'>
                    <div className='column-left'>
                        <img src={taranakiApp} alt="figma prototype for taranaki booking app" />
                    </div>

                    <div className='column-right'>
                        <div className='content'>
                            <h1>Taranaki App</h1>
                            <h2>Digital Booking Accommodation Application</h2>

                            <section>
                                <h2>About</h2>
                                <p>Single page web application with javascript and scss as main frameworks. This project will allow users to book accommodation in Taranaki with some restrictions. The first part of the user experience involves visitors to a specially designed site inputting information and being shown accommodation options and related details based on the number of people in their party and the length of time they intend to be staying. The second part involves displaying meal options for the chosen accomodation option. </p>
                            </section>

                            <section>
                                <h2>Design</h2>
                                <img src={taranakiMB} alt="moodboard for taranaki booking app" />
                            </section>

                            <section>
                                <h2>Development</h2>
                                <p>
                                    Development is a simple one page html document, best viewport size Pixel 5 (width: 400px).
                                </p>
                                <img src={code4} alt="code for taranaki booking app" />
                                <img src={code5} alt="code for taranaki booking app" />
                            </section>

                            <div className='content__box'>
                                <a className='btn project-btn' target='blank' rel="noreferrer" href="https://github.com/lanaball/Accommodation-App--Javascript.git">GitHub Repository</a>

                                <a className='btn project-btn' target='blank' rel="noreferrer" href="https://www.figma.com/proto/Z8tnXaBAZWDSKeFkPlJOPy/Taranaki-Stay?page-id=0%3A1&type=design&node-id=27-20&viewport=568%2C301%2C0.13&scaling=contain&starting-point-node-id=1%3A2&mode=design">Figma Design</a>

                                <a className='btn project-btn' href=" https://lanaball.github.io/Accommodation-App--Javascript/">View</a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
};
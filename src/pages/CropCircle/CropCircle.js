// COMPONENTS
import BackButton from '../../components/BackButton/BackButton';

// STYLE
import './_CropCircle.scss';

// IMAGES
import mockup from '../../assets/images/cropcircle/CropMock.png';
import cropCover from '../../assets/images/cropcircle/COVER PAGE.png';
import cropBrief from '../../assets/images/cropcircle/PROJECT BRIEF.png';
import cropResearch from '../../assets/images/cropcircle/Market Research.png';
import cropMVP from '../../assets/images/cropcircle/MVP REQUIREMENTS.png';
import cropCase from '../../assets/images/cropcircle/CASE DIAGRAM.png';
import cropActivity from '../../assets/images/cropcircle/ACTIVITY DIAGRAM.png';
import cropMood from '../../assets/images/cropcircle/MOODBOARD.png';
import cropStyle from '../../assets/images/cropcircle/STYLE TILE.png';
import cropStyle2 from '../../assets/images/cropcircle/STYLE TILE2.png';
import cropWire from '../../assets/images/cropcircle/WIREFRAMES.png';
import cropWire2 from '../../assets/images/cropcircle/WIREFRAMES2.png';
import cropProto2 from '../../assets/images/cropcircle/HI FIDELITY DESKTOP.png';
import cropProto from '../../assets/images/cropcircle/HI FIDELITY.png';


export default function CropCircle() {

    const pageTitle = "Crop Circle"

    return (
        <>
            <div className='main-page'>
                <BackButton pageTitle={pageTitle} />
                <main className='main-page__body' id='crop-circle'>
                    <div >
                        <img className='main-page__image' src={mockup} alt="mockup" />
                    </div>

                    <div>
                        <div className='content'>

                            {<img className='content-image' src={cropCover} alt="cropcircle - Cover" />}
                            {<img className='content-image' src={cropBrief} alt="cropcircle - Brief" />}
                            {<img className='content-image' src={cropResearch} alt="cropcircle - Research" />}
                            {<img className='content-image' src={cropMVP} alt="cropcircle - MVP" />}
                            {<img className='content-image' src={cropCase} alt="cropcircle - use case research" />}
                            {<img className='content-image' src={cropActivity} alt="cropcircle - Research" />}
                            {<img className='content-image' src={cropMood} alt="cropcircle - Research" />}
                            {<img className='content-image' src={cropStyle} alt="cropcircle - Research" />}
                            {<img className='content-image' src={cropStyle2} alt="cropcircle - Research" />}
                            {<img className='content-image' src={cropWire} alt="cropcircle - Research" />}
                            {<img className='content-image' src={cropWire2} alt="cropcircle - Research" />}
                            {<img className='content-image' src={cropProto} alt="cropcircle - Research" />}
                            {<img className='content-image' src={cropProto2} alt="cropcircle - Research" />}
                            

                         

                        

                            <section>
                                <h2>Development</h2>
                                <p>
                                    We created an application that allows users to Create, Read, Update, and Delete (CRUD) listings using a React framework. The application provides a seamless platform for users to participate in trading, assuming dual roles as both "sellers" and "buyers" within a unified profile. "Sellers" can offer their surplus produce, while "buyers" can acquire the produce either for free or through barter, including labor or other produce.
                                </p>
                               

                                <div className='content__box'>
                                    <a className='btn project-btn' target='blank' rel="noreferrer" href="https://www.figma.com/proto/NamMEkQC9U6BPTwPkt0qiH/Summative-3.0---Bookwork?type=design&node-id=68-934&scaling=contain&page-id=0%3A1&starting-point-node-id=3%3A82&show-proto-sidebar=1&mode=design">Figma Report</a>

                                       <a className='btn project-btn' target='blank' rel="noreferrer" href="https://www.figma.com/proto/uO9QfCLfT9GqZHQvvIGsTQ/DESIGN-FILES?page-id=0%3A1&type=design&node-id=80-1893&viewport=-254%2C684%2C0.07&scaling=min-zoom&starting-point-node-id=80%3A1893&show-proto-sidebar=1&mode=design">Figma Prototype</a>
                                    
                                    <a className='btn project-btn' target='blank' rel="noreferrer" href="https://github.com/lanaball/CropCircle.git">GitHub Repository</a>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
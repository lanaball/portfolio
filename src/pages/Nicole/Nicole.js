// COMPONENTS
import BackButton from '../../components/BackButton/BackButton';

// STYLE
import './_Nicole.scss';

// IMAGES
import NicoleImage from '../../assets/images/nicole/Nicolemock.png';
import NicoleCover from '../../assets/images/nicole/COVER PAGE.png';
import NicoleBrief from '../../assets/images/nicole/brief.png';
import NicoleIcons from '../../assets/images/nicole/MOODBOARD.png';
import NicoleDesigns from '../../assets/images/nicole/FIGMA DESIGN.png';
import NicoleSite from '../../assets/images/nicole/site design.png';


export default function Nicole() {

    const pageTitle = "Nicole"

    return (
        <>
            <div className='main-page'>
                <BackButton pageTitle={pageTitle} />

                <main className='main-page__body'>
                    <div>
                        <img className='main-page__image' src={NicoleImage} alt="" />
                    </div>

                    <div className='content'>
                        <div>
                            <img className='BV-image' src={NicoleCover} alt="" />
                            <img className='BV-image' src={NicoleBrief} alt="" />
                            <img className='BV-image' src={NicoleIcons} alt="" />
                            <img className='BV-image' src={NicoleDesigns} alt="" />
                            <img className='BV-image' src={NicoleSite} alt="" />
                            


                            <div className='content__box'>         
                                <a className='btn project-btn' target='__blank' href="https://www.nicolebernhardt.com/">View Site</a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
};
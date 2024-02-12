// COMPONENTS
import BackButton from '../../components/BackButton/BackButton';

// STYLE
import './_bookvibe.scss';

// IMAGES
import Bookvibe from '../../assets/images/bookvibe/BookVibeMock.png';
import BVHome from '../../assets/images/bookvibe/Home (with list view).png';
import BVHome1 from '../../assets/images/bookvibe/Home.png';
import BVLanding from '../../assets/images/bookvibe/Landing.png';
import BVAddBook from '../../assets/images/bookvibe/Add Book.png';
import BVDetail from '../../assets/images/bookvibe/Book Detail.png';
import BVUpdate from '../../assets/images/bookvibe/Update Entry.png';


export default function BookVibe() {

    const pageTitle = "Book Vibe"

    return (
        <div className='main-page'>
            <BackButton pageTitle={pageTitle} />

            <main className='main-page__body'>
                    <div>
                        <img className='main-page__image' src={Bookvibe} alt="home view" />
                    </div>

                <div className="content">
                    <img className='main-page__image BV-image' src={BVLanding} alt="home view" />  
                    <img className='main-page__image BV-image' src={BVHome1} alt="home view" />    
                    <img className='main-page__image BV-image' src={BVHome} alt="home view" /> 
                    <img className='main-page__image BV-image' src={BVAddBook} alt="home view" /> 
                    <img className='main-page__image BV-image' src={BVDetail} alt="home view" />  
                    <img className='main-page__image' src={BVUpdate} alt="home view" />  

                    <section>
                       

                        <div className='content__box'>
                            {/* <a className='btn project-btn' target='blank' rel="noreferrer" href="https://www.figma.com/file/diZQs31jFVh34c8TdVSjhR/Book-Vibe?type=design&node-id=0%3A1&mode=design&t=tDmcUJaBHyVOIAp1-1">Figma Design</a> */}

                            <a className='btn' target='blank' rel="noreferrer" href="https://github.com/lanaball/bookvibe-3.2.git">Github Repository</a>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

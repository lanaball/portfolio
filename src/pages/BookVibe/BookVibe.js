// COMPONENTS
import BackButton from '../../components/BackButton/BackButton';

// STYLE
import './_bookvibe.scss';

// IMAGES
import BookVibeDisplay from '../../assets/images/bookvibe/Frame 38.png';
import BookHome from '../../assets/images/bookvibe/Home.png';
import Bookvibe from '../../assets/images/bookvibe/bookmu.png';



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
                    <h2>About</h2>
                    <p>
                        Book Vibe was a playful experiment aimed at better understanding how to create applications using the React framework. The app encourages users to review a book that they have recently read and assign it a colour based on the associated vibe. </p>


                    <section>
                        <h2>Design</h2>
                        <div>
                            <img src={BookVibeDisplay} alt="display of prototype" />
                        </div>
                    </section>

                    <section>
                        <h2>Development</h2>
                        <p>Technical tools used: <br /> MongoDB <br /> Express <br /> React <br /> Node Js <br /> GitHub Collaboration <br /> LucidCharts <br /> ClickUp <br /> Teams   </p>

                        <div className='content__box'>
                            <a className='btn project-btn' target='blank' rel="noreferrer" href="https://www.figma.com/file/diZQs31jFVh34c8TdVSjhR/Book-Vibe?type=design&node-id=0%3A1&mode=design&t=tDmcUJaBHyVOIAp1-1">Figma Design</a>

                            <a className='btn project-btn' target='blank' rel="noreferrer" href="https://github.com/lanaball/bookvibe-3.2.git">Github Repository</a>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

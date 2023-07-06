// ----- IMPORT ------
import { Link } from 'react-router-dom';

// -------- STYLE --------
import './_projects.scss';

// -------- IMAGES --------
import Taranaki from '../../assets/images/taranaki/mockup-taranaki3.png';
import CropCircle from '../../assets/images/cropcircle/mockup-cc2.png';
import Nata from '../../assets/images/nata/natamock.png';
import BookVibe from '../../assets/images/bookvibe/bookmu.png';

// COMPONENTS
import AsideBar from '../../components/AsideBar/AsideBar';
import Navbar from '../../components/Navbar/Navbar';



const Projects = () => {

  return (
    <>
       <AsideBar />
        <Navbar />
    <div id="projects" className="wrapper">
      <h1 className="triangle-steady projects-title"> Projects</h1>


      <div className="projects-card"  >
        <div className="projects-column__image">
          <Link to='/CropCircle' > <img className="projects-image" src={CropCircle} alt="mockup of accommodation app" /> </Link>
        </div>


        <div className="projects-column__content right-start">
          <h5 className="projects-card__title">Crop Circle</h5>
          <h6 className="projects-card__subtitle">Front and Back End Application Development</h6>
            <div className="skills">
            <div className="skills__skill small">MongoDB</div>
            <div className="skills__skill small">Express</div>
            <div className="skills__skill small">React</div>
            <div className="skills__skill small">Node JS</div>
            <div className="skills__skill small">GitHub</div>
          </div>
          <Link className='link' to='/CropCircle' >
            <button className='btn'>See More</button>
          </Link>
        </div>
      </div>



      <div className="projects-card">
        <div className="projects-column__content">
          <h5 className="projects-card__title">Nata Chocolates</h5>
          <h6 className="projects-card__subtitle">WordPress Custom Design</h6>
           <div className="skills">
            <div className="skills__skill small">WordPress</div>
            <div className="skills__skill small">PHP</div>
            <div className="skills__skill small">GitHub</div>
          </div>
          <Link className='link' to='/NataChocolate' >
            <button className='btn projects-btn'>See More</button>
          </Link>
        </div>

        <div className="projects-column__image">
          <Link to='/NataChocolate' >
            <img className="projects-image" src={Nata} alt="mockup of accommodation app" />
          </Link>
        </div>
      </div>




      <div className="projects-card">
        <div className="projects-column__image">
          <Link to='/TaranakiApp'>
            <img className="projects-image" src={Taranaki} alt="mockup" />
          </Link>
        </div>

        <div className="projects-column__content right-start">
          <h5 className="projects-card__title">Accommodation App</h5>
          <h6 className="projects-card__subtitle">Single Page Javascript Application</h6>
            <div className='skills'>
            <div className="skills__skill small">HTML</div>
            <div className="skills__skill small">CSS</div>
            <div className="skills__skill small">SCSS</div>
            <div className="skills__skill small">Javascript</div>
          </div>
          <Link className='link' to='/TaranakiApp' >
            <button className='btn'>See More</button>
          </Link>
        </div>
      </div>



      <div className="projects-card">
        <div className="projects-column__content">
          <h5 className="projects-card__title">Bookvibe</h5>
          <h6 className="projects-card__subtitle">Front and Back End Application Development</h6>
          <p className="projects-card__para">  </p>

          <div className="skills">
            <div className="skills__skill small">MongoDB</div>
            <div className="skills__skill small">Express</div>
            <div className="skills__skill small">React</div>
            <div className="skills__skill small">Node JS</div>
            <div className="skills__skill small">GitHub</div>
          </div>
          <Link className='link' to='/Bookvibe' >
            <button className='btn projects-btn'>See More</button>
          </Link>
        </div>

        <div className="projects-column__image">
          <Link to='/Bookvibe' >
            <img className="projects-image" src={BookVibe} alt="mockup of accommodation app" />
          </Link>
        </div>
      </div>


    </div>
   
    </>
  )
}

export default Projects;
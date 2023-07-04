// ----- IMPORT ------
import { Link } from 'react-router-dom';


// -------- STYLE --------
import './_projects.scss';


// -------- IMAGES --------
import Taranaki from '../../assets/images/taranaki/mockup-taranaki3.png';
import CropCircle from '../../assets/images/cropcircle/mockup-cc2.png';
import Nata from '../../assets/images/nata/natamock.png';
import BookVibe from '../../assets/images/bookvibe/bookmu.png';


const Projects = () => {



  return (

    <div id="projects" className="wrapper">
      <h3 className="triangle-steady projects-title"> Projects</h3>


      <div className="projects-card"  >
        <div className="projects-column__image">
          <Link to='./CropCircle' > <img className="projects-image" src={CropCircle} alt="mockup of accommodation app" /> </Link>
        </div>


        <div className="projects-column__content right-start">
          <h5 className="projects-card__title">Crop Circle</h5>
          <h6 className="projects-card__subtitle">Front and Back End Application Development</h6>
          {/* <p className="projects-card__para"> During a time when the cost of produce in Aotearoa was skyrocketing we decided to create a community focused produce waste website. Crop Circle allows users to share their garden crops with others. </p> */}
          <div className="skills">
            <div className="skills__skill small">MongoDB</div>
            <div className="skills__skill small">Express</div>
            <div className="skills__skill small">React</div>
            <div className="skills__skill small">Node JS</div>
            <div className="skills__skill small">GitHub</div>
          </div>
          <Link className='link' to='./CropCircle' >
            <button className='btn'>See More</button>
          </Link>
        </div>
      </div>



      <div className="projects-card">
        <div className="projects-column__content">
          <h5 className="projects-card__title">Nata Chocolates</h5>
          <h6 className="projects-card__subtitle">WordPress Custom Design</h6>
          {/* <p className="projects-card__para"> Creating a ecommerce WordPress site and custom theme for Nata. For this project, I worked with an artisanal chocolate maker in Costa Rica to showcase their exquisite chocolates. </p> */}

          <div className="skills">
            <div className="skills__skill small">WordPress</div>
            <div className="skills__skill small">PHP</div>
            <div className="skills__skill small">GitHub</div>
          </div>
          <Link className='link' to='./NataChocolate' >
            <button className='btn projects-btn'>See More</button>
          </Link>
        </div>

        <div className="projects-column__image">
          <Link to='./NataChocolate' >
            <img className="projects-image" src={Nata} alt="mockup of accommodation app" />
          </Link>
        </div>
      </div>




      <div className="projects-card">
        <div className="projects-column__image">
          <Link to='./TaranakiApp'>
            <img className="projects-image" src={Taranaki} alt="mockup" />
          </Link>
        </div>

        <div className="projects-column__content right-start">
          <h5 className="projects-card__title">Accommodation App</h5>
          <h6 className="projects-card__subtitle">Single Page Javascript Application</h6>
          {/* <p className="projects-card__para"> When the mountain and sea is calling...you need to visit Taranaki. This digital booking accommodation application allows users to book accommodation in Taranaki. </p> */}

          <div className='skills'>
            <div className="skills__skill small">HTML</div>
            <div className="skills__skill small">CSS</div>
            <div className="skills__skill small">SCSS</div>
            <div className="skills__skill small">Javascript</div>
          </div>
          <Link className='link' to='./TaranakiApp' >
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
          <Link className='link' to='./Bookvibe' >
            <button className='btn projects-btn'>See More</button>
          </Link>
        </div>

        <div className="projects-column__image">
          <Link to='./bookvibe' >
            <img className="projects-image" src={BookVibe} alt="mockup of accommodation app" />
          </Link>
        </div>
      </div>


    </div>


  )
}

export default Projects;
import { Link } from 'react-router-dom';

// -------- STYLE --------
import './_projects.scss';

// IMPORT: in your APP.js or any component file
import { motion } from 'framer-motion';

// -------- IMAGES --------
import Taranaki from '../../assets/images/mockup-taranaki3.png';
import CropCircle from '../../assets/images/mockup-cc2.png';


const Projects = () => {

  return (

    <div id="projects" className="wrapper">
      <h3 className="triangle projects-title"> Projects</h3>


      <motion.div animate={{ y: -50, transition: { duration: 5, delay: 1 } }}
        initial={{ x: 20 }}>
        <div className="projects-card">
          <div className="projects-column__image">
            <Link to='./CropCircle' > <img className="projects-image" src={CropCircle} alt="mockup of accommodation app" /> </Link>
          </div>

          <div className="projects-column__content right-start">
            <h5 className="projects-card__title">Crop Circle</h5>
            <h6 className="projects-card__subtitle">MERN fullstack Design</h6>
            <p className="projects-card__para">Group Project. Creating a consumer to consumer app and website that allows users to share their garden produce with
              others. </p>
          </div>
        </div>
      </motion.div>

      <motion.div animate={{ y: -50, transition: { duration: 2, delay: 1 } }}
        initial={{ x: 20 }}>
        <div className="projects-card">

          <div className="projects-column__content right-start">
            <h5 className="projects-card__title">Nata Chocolates</h5>
            <h6 className="projects-card__subtitle">WordPress Custom Design</h6>
            <p className="projects-card__para"> Creating a ecommerce WordPress custom theme </p>
          </div>
          <div className="projects-column__image">
            <Link to='./WordPress' >
              <img className="projects-image" src={CropCircle} alt="mockup of accommodation app" /> 
        </Link>
          </div>
        </div>
      </motion.div>


      <motion.div animate={{ y: 50, transition: { duration: 2, delay: 1 } }}
        initial={{ x: 20 }}>
        <div className="projects-card">
          <div className="projects-column__image">
            <Link to='./TaranakiApp'>
            <img className="projects-image" src={Taranaki} alt="mockup" />
            </Link>
          </div>

          <div className="projects-column__content">
            <h5 className="projects-card__title">Accommodation App</h5>
            <h6 className="projects-card__subtitle">case study</h6>
            <p className="projects-card__para">An application that allows users to book accommodation in Taranaki adapted to number of guests and meal choices</p>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default Projects;
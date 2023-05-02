// -------- STYLE --------
import './Projects.scss';

// -------- IMAGES --------
import Taranaki from '../../assets/images/mockup-taranaki3.png';
import CropCircle from '../../assets/images/mockup-cc2.png';


const Projects = () => {

    return (
    <div id="projects" className="wrapper">
          <h3 className="triangle projects-title"> Projects</h3>

              <div className="projects-card">
                <div className="projects-column__image">
                  <a href="#"><img className="projects-image" src={CropCircle} alt="mockup of accommodation app" /></a>
          </div>
          
                <div className="projects-column__content right-start">
                  <h5 className="projects-card__title">Crop Circle</h5>
                  <h6 className="projects-card__subtitle">C2C MERN CRUD</h6>
                  <p  className="projects-card__para">Group Project. Creating a consumer to consumer app and website that allows users to share their garden produce with
                    others. </p>
              </div>
        </div>

            
            <div className="projects-card">
              <div className="projects-column__content">
                <h5 className="projects-card__title">Accommodation App</h5>
                <h6 className="projects-card__subtitle">case study</h6>
                <p className="projects-card__para">An application that allows users to book accommodation in Taranaki adapted to number of guests and meal choices</p>
              </div>
            <div className="projects-column__image">
              <a href="/"><img className="projects-image" src={Taranaki} alt="mockup" /></a>
            </div>
          </div>
</div>
 )
}

export default Projects;
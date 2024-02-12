
import BackButton from "../../components/BackButton/BackButton";

// STYLE
import './_nataChocolate.scss';

// IMAGES
import nataCover from '../../assets/images/nata/COVER PAGE.png';
import nataBrief from '../../assets/images/nata/PRJECT BRIEF.png';
import nataMap from '../../assets/images/nata/EMPATHY MAP.png';
import nataPersona from '../../assets/images/nata/USER PERSONA.png';
import nataPersona2 from '../../assets/images/nata/USER PERSONA2.png';
import nataUser from '../../assets/images/nata/USER TESTING.png';
import nataEnd from '../../assets/images/nata/end.png';
import nataMood from '../../assets/images/nata/moodboard.png';
import nataProto from '../../assets/images/nata/PROTOTYPE.png';
import nataProto2 from '../../assets/images/nata/PROTOTYPE2.png';
import nataResults from '../../assets/images/nata/RESULTS.png';
import nataSite from '../../assets/images/nata/SITEMAP.png';
import nataStyle from '../../assets/images/nata/style tile.png';
import nataStyle2 from '../../assets/images/nata/STYLE TILE2.png';
import nataWire from '../../assets/images/nata/WIREFRAMES.png';
import nataWire2 from '../../assets/images/nata/WIREFRAMES2.png';


const NataChocolate = () => {

  const pageTitle = "Nata Craft Cacao"

  return (
    <>
      <div className='main-page'>
        <BackButton pageTitle={pageTitle} />
        <main className="main-page__body" id="nata">

          <div >
             
          </div>
          <div>
            <div className='content'>
              
          
               <section className="nata-design">
          
                <div className='nata-image__design'>
                  <img className="nata-image__report" src={nataCover} alt="Nata UX Report - Cover" />
                  <img className="nata-image__report" src={nataBrief} alt="Nata UX Report - Client Brief" />
                  <img className="nata-image__report" src={nataMap} alt="Nata UX Report - Emapthy Map" />
                  <img className="nata-image__report" src={nataPersona} alt="Nata UX Report - Persona" />
                  <img className="nata-image__report" src={nataPersona2} alt="Nata UX Report - Persona2" />
                  <img className="nata-image__report" src={nataSite} alt="Nata UX Report - Site Map" />
                  <img className="nata-image__report" src={nataMood} alt="Nata UX Report - MoodBoard" />
                  <img className="nata-image__report" src={nataStyle} alt="Nata UX Report - StyleTile" />
                  <img className="nata-image__report" src={nataStyle2} alt="Nata UX Report - StyleTile2" />
                  <img className="nata-image__report" src={nataWire} alt="Nata UX Report - Wireframes" />
                  <img className="nata-image__report" src={nataWire2} alt="Nata UX Report - Wireframes2" />
                  <img className="nata-image__report" src={nataUser} alt="Nata UX Report - User Testing" />
                  <img className="nata-image__report" src={nataResults} alt="Nata UX Report - User Testing Results" />
                  <img className="nata-image__report" src={nataProto} alt="Nata UX Report - Prototype" />
                  <img className="nata-image__report" src={nataProto2} alt="Nata UX Report - Prototype" />
                  <img className="nata-image__report" src={nataEnd} alt="Nata UX Report - End" />
                  </div>
              </section>

              <section>
           
                <div className="content__box">
                  <a className='btn' target='blank' rel="noreferrer" href="https://www.figma.com/proto/GyjW8dG53VSXKKUzyFnGvb/nata-chocolate?type=design&node-id=117-1755&scaling=scale-down-width&page-id=117%3A1429&starting-point-node-id=117%3A1755&mode=design">Figma Report</a>

                  <a className='btn' target='blank' rel="noreferrer" href="https://www.figma.com/proto/GyjW8dG53VSXKKUzyFnGvb/nata-chocolate?type=design&node-id=27-33&viewport=-766%2C231%2C0.33&scaling=contain&starting-point-node-id=27%3A34&show-proto-sidebar=1">Figma Design</a>

                  <a className='btn' target='blank' rel="noreferrer" href="https://github.com/lanaball/WP-NataChocolate.git">GitHub Repository</a>

                  <a className='btn' target='blank' rel="noreferrer" href="https://allana.kennedy.yoobeestudent.net/summative/">View</a>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default NataChocolate;
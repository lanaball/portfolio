
import BackButton from "../../components/BackButton/BackButton";

// STYLE
import './_nataChocolate.scss';

// IMAGES
import Design from '../../assets/images/nata/NataDisplay3.png';
import Development2 from '../../assets/images/nata/screenshot2.png';
import Nata from '../../assets/images/nata/natamock.png';


const NataChocolate = () => {

  const pageTitle = "Nata Craft Cacao"

  return (
    <>
      <div className='main-page'>
        <BackButton pageTitle={pageTitle} />
        <main className="main-page__body">

          <div >
             <img className="main-page__image" src={Nata} alt="mockup of accommodation app" />
          </div>
          <div>
            <div className='content'>
              <h2>About</h2>
              <p>
                Nata Craft Cacao are looking to create a website to elevate their business, they have a focus on local markets in Quepos, Costa Rica and word of mouth but want a website to showcase their story, products, events they run and a blog that Natalia writes.
              </p>
              <p>
                The website features a modern and elegant design, reflecting the brand's image and values. A carefully crafted user experience strategy was implemented, focusing on intuitive navigation, captivating visuals, and seamless functionality.
              </p>
              <p>
                The WordPress CMS was customized to enable easy content management, allowing the client to update and showcase their products effortlessly. A training documentation was provided to guide the client on managing the website using the WordPress CMS effectively.
              </p>
               <section>
                <h2>Design</h2>
          
                <img className='nata-image__design' src={Design} alt="images of figma design" />
              </section>

              <section>
                <h2>Development</h2>
                <p>
                  Custom Theme Development <br />
                  The process of building a custom theme required developing an in-depth understanding of php to build efficient code. Creating custom posts and taxonomies to allow posts to be organized more efficiently for the client to upload content.
                </p>
                <img className='nata-image__development' src={Development2} alt="screenshot of website" />

                <div className="content__box">
                  <a className='btn project-btn' target='blank' rel="noreferrer" href="https://www.figma.com/proto/GyjW8dG53VSXKKUzyFnGvb/nata-chocolate?type=design&node-id=117-1755&scaling=scale-down-width&page-id=117%3A1429&starting-point-node-id=117%3A1755&mode=design">Figma Report</a>

                  <a className='btn project-btn' target='blank' rel="noreferrer" href="https://www.figma.com/proto/GyjW8dG53VSXKKUzyFnGvb/nata-chocolate?type=design&node-id=27-33&viewport=-766%2C231%2C0.33&scaling=contain&starting-point-node-id=27%3A34&show-proto-sidebar=1">Figma Design</a>

                  <a className='btn project-btn' target='blank' rel="noreferrer" href="https://github.com/lanaball/WP-NataChocolate.git">GitHub Repository</a>

                  <a className='btn project-btn' target='blank' rel="noreferrer" href="https://allana.kennedy.yoobeestudent.net/summative/">View</a>
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
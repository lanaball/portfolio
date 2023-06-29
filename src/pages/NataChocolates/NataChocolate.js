
import BackButton from "../../components/BackButton/BackButton";

// STYLE
import './_nataChocolate.scss';

// IMAGES
import Wordpress from '../../assets/images/nata/Landing Page.png';
import Design from '../../assets/images/nata/Group 7.png';
import Development1 from '../../assets/images/nata/screenshot1.png';
import Development2 from '../../assets/images/nata/screenshot2.png';



const NataChocolate = () => {

  const pageTitle = "Nata Craft Cacao"
  
  return (
    <>
      <div className='main-page'>
        <BackButton pageTitle={pageTitle}/>
        <main className="main-page__body">
          <div className='column-left'>
            <div className='column-left__image' >
              <img className='nata-image' src={Wordpress} alt="screenshot of website" />
            </div>
          </div>

          <div className="column-right">
            <div className='content'>
              
                <h2>About</h2>
                <p>
                  Nata Craft Cacao are looking to create a website to showcase their business, they have a focus on local markets in Quepos, Costa Rica and want a website to showcase their story, events and blog.
                </p>
                <p>
                  The website features a modern and elegant design, reflecting the brand's image and values. A carefully crafted user experience strategy was implemented, focusing on intuitive navigation, captivating visuals, and seamless functionality.
                </p>
                <p>
                  To ensure easy access to information, a well-structured sitemap was designed, organizing the content into relevant categories such as chocolate types, flavor profiles, and product details. Three user personas were developed to guide the design process, taking into account the preferences and needs of potential customers.
                </p>
                <p>
                  The WordPress CMS was customized to enable easy content management, allowing the client to update and showcase their products effortlessly. Training documentation was provided to guide the client on managing the website using the WordPress CMS effectively.
                </p>
                <p>
                  Overall, this project showcases the artisanal chocolate maker, resulting in a visually stunning, user-friendly, and customizable website that effectively captures the essence of the brand and offers a delightful experience to chocolate lovers and people who want to know more about the brand Nata.
                </p>

                <div className="content__box">
                  <a className='btn project-btn' target='blank' rel="noreferrer" href="https://www.figma.com/proto/GyjW8dG53VSXKKUzyFnGvb/nata-chocolate?type=design&node-id=117-1755&scaling=scale-down-width&page-id=117%3A1429&starting-point-node-id=117%3A1755&mode=design">Figma Report</a>
                </div>
            

              <section>
                <h2>Design</h2>
                {/* <img src={Moodboard} alt="moodboard for Nata" /> */}
                <img className='nata-image__design' src={Design} alt="screenshot of website" />
                <div className="content__box">
                  <a className='btn project-btn' target='blank' rel="noreferrer" href="https://www.figma.com/proto/GyjW8dG53VSXKKUzyFnGvb/nata-chocolate?type=design&node-id=27-33&viewport=-766%2C231%2C0.33&scaling=contain&starting-point-node-id=27%3A34&show-proto-sidebar=1">Figma Design</a>
                </div>
              </section>

              <section>
                <h2>Development</h2>
                <p>
                  
Custom Theme Development <br />

The process of building a custom theme required developing an in-depth understanding of php to build efficient code. Javascript was used to animate and conditionally display content.

                </p>
                <img className='nata-image__development' src={Development1} alt="screenshot of website" />
                <img className='nata-image__development' src={Development2} alt="screenshot of website" />

                <div className="content__box">
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
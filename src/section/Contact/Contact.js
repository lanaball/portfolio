// ------------ IMPORTS -------------
import './_Contact.scss';
import EmailIcon from '@mui/icons-material/Email';

// COMPONENTS
import AsideBar from '../../components/AsideBar/AsideBar';
import Navbar from '../../components/Navbar/Navbar';

const Contact = () => {


  return (
    <>
       <AsideBar />
        <Navbar />
      <div id='contact' className="wrapper">
        <h1 className="triangle-steady contact-header">Contact</h1>
        <div className='contact'>

          <div className='main-grid'>
            <div className="contact-card">
              <h5 className="contact-card__head">Let's get a coffee</h5>
              <div className='contact-card__email'>
                <h6>Get in touch</h6>
                <a href="mailto:allana.m.kennedy@gmail.com" > <EmailIcon /> allana.m.kennedy@gmail.com </a>
              </div>

            </div>

            <form className="contact-form" action="mailto:allana.m.kennedy@gmail.com" method="post" encType="text">

              <div className="contact-form__item">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="contact-form__item">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="contact-form__item grid">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" cols="30" placeholder='Type something here...' maxLength="1000" required=""></textarea>
              </div>



              <input className="btn submit-button" type="submit" value="Send Message" />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
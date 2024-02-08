// ------------ IMPORTS -------------
import './_Contact.scss';
import EmailIcon from '@mui/icons-material/Email';

// COMPONENTS
import AsideBar from '../../components/AsideBar/AsideBar';
import Navbar from '../../components/Navbar/Navbar';

import contactImage from '../../assets/images/phone.jpg';


const Contact = () => {


  return (
    <>
       <AsideBar />
        <Navbar />
<div id='contact' className="wrapper">
  <h1 className="triangle-steady contact-header">Contact</h1>
  <div className='contact'>
    <div className="contact-card">
      <div className='contact-card__content'>
        <h2 className="contact-card__head">Let's kick it old school</h2>
        <div className='contact-card__email'>
          <h6>Let's get a coffee</h6>
          <span className='contact-email'>Email me at: <a className='contact-email' href="mailto:allana.m.kennedy@gmail.com">allana.m.kennedy@gmail.com</a> </span> 
          <p className='contact-phone'>Or call me on: <a href='tel:0225264766'>022 526 4766</a></p>
        </div>
      </div>
      <img className='contact-image' src={contactImage} alt="phone" />
    </div>
  </div>
</div>

    </>
  )
}

export default Contact;
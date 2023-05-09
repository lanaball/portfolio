


// ------------ STYLE -------------
import './Footer.scss'

const Footer = () => {

    return (
        <div className="wrapper">
        <h3 className="triangle contact-header">Contact</h3>
        <div className="card">
          <h6 className="card-head">Let's Connect</h6>
          <p>Interested in working together or looking to chat over coffee?</p>
          <p>Shoot me a message and let's talk</p>
     </div>
        <div className="contact-form">
          <form action="mailto:allana.m.kennedy@gmail.com" method="post" encType="text">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" cols="30"></textarea>
                    <input className="btn" type="submit" value="Submit" />
          </form>
        
            </div> 
         
        <div>
          
          <a className="to-top" href="./">Back to Top</a></div> 
         </div>
  )
}

export default Footer;
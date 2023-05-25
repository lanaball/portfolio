import './Skills.scss';


const Skills = () => {

    return (
        <>
           <div className="about-skills__wrapper wrapper">
             <h4 className='skills__title'>Development Skills</h4>
             <div className="skills">
               <div className="skills__skill">HTML</div>
               <div className="skills__skill">CSS</div>
               <div className="skills__skill">SASS</div>
              <div className="skills__skill">Javascript</div>
               <div className="skills__skill">React</div>
               <div className="skills__skill">Express</div>
               <div className="skills__skill">Node JS</div>
               <div className="skills__skill">MongoDB</div>
               <div className="skills__skill">GitHub</div>
            <div className="skills__skill">Shopify</div>
            <div className="skills__skill">WordPress</div>
             </div>
             <h4 className='skills__title'>UX/UI Skills</h4>
             <div className="skills">
               <div className="skills__skill">Collaboration</div>
               <div className="skills__skill">UX/UI ideation and workflows</div>
              <div className="skills__skill">Wireframing</div>
              <div className="skills__skill">Protoyping</div>
              <div className="skills__skill">Journey Mapping</div>
              <div className="skills__skill">Usability testing</div>
            </div>
             <div className="home_cta">
             {/* <a href="./#contact" className="btn">Contact</a> */}
         </div>
          </div>
            </>
    )
}

export default Skills;
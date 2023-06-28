import './_Skills.scss';


const Skills = () => {

    return (
        <>
           <div className="about-skills__wrapper wrapper">
             <h4 className='skills__title'>Development Skills</h4>
             <div className="skills">
               <div className="skills__skill small">HTML</div>
               <div className="skills__skill small">CSS</div>
               <div className="skills__skill small">SCSS</div>
              <div className="skills__skill small">Javascript</div>
               <div className="skills__skill small">React</div>
               <div className="skills__skill small">Express</div>
               <div className="skills__skill small">Node JS</div>
               <div className="skills__skill small">MongoDB</div>
               <div className="skills__skill small">GitHub</div>
            <div className="skills__skill small">Shopify</div>
            <div className="skills__skill small">WordPress</div>
              <div className="skills__skill small">PHP</div>
             </div>
             <h4 className='skills__title'>UX/UI Skills</h4>
             <div className="skills">
               <div className="skills__skill small">Collaboration</div>
               <div className="skills__skill small">UX/UI ideation and workflows</div>
              <div className="skills__skill small">Wireframing</div>
              <div className="skills__skill small">Protoyping</div>
              <div className="skills__skill small">Journey Mapping</div>
              <div className="skills__skill small">Usability testing</div>
            </div>
             <div className="home_cta">
             {/* <a href="./#contact" className="btn">Contact</a> */}
         </div>
          </div>
            </>
    )
}

export default Skills;
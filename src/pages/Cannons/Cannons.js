import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// COMPONENTS
import BackButton from '../../components/BackButton/BackButton';

// STYLE
import './_cannons.scss';

// IMAGES
import cannonsImage from '../../assets/images/cannons/CANNONS.png';
import Cannon1 from '../../assets/images/cannons/Cannon1.png';
import Cannon2 from '../../assets/images/cannons/Cannon2.png';
import Cannon3 from '../../assets/images/cannons/Cannon3.png'

export default function Cannons() {

  const pageTitle = "Cannons For Sale";
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const durations = [6000, 3000, 6000, 8000];
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, durations[imageIndex]);
    return () => clearInterval(interval);
  }, [imageIndex]); 
    
  const images = [
    cannonsImage,
    Cannon1 ,
    Cannon2 ,
    Cannon3,
  ];

    return (
  <>
      <div className='main-page' id='cannons'>
        <BackButton pageTitle={pageTitle} />
        <div className='content'>
          <div className="image-overlay-container">
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className={`image-overlay ${index === imageIndex ? 'active' : ''}`}
                style={{ zIndex: images.length - index }}
                initial={{ opacity: 0 }} // Initial opacity
                animate={{ opacity: index === imageIndex ? 1 : 0 }} // Only animate opacity if it's the active image
                transition={{ duration: 1 }} // Fade in/out duration
              />
            ))}
          </div>
          <div className='content__box'>
            <a className='btn' target='__blank' href="https://cannonsforsale.com/">View Site</a>
          </div>
        </div>
      </div>
    </>
    )
};
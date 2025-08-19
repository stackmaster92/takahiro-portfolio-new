import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import rv1 from '../assets/Riverview/1.jpg';
import rv2 from '../assets/Riverview/2.jpg';
import rv3 from '../assets/Riverview/3.jpg';
import rv4 from '../assets/Riverview/4.jpg';

const images = [
  rv1,
  rv2,
  rv3,
  rv4
];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000); 
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className='relative w-full h-96'> 
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className='absolute inset-0 object-cover w-full h-full rounded-2xl'
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{
              opacity: currentIndex === index ? 1 : 0,
              filter: currentIndex === index ? 'blur(0px)' : 'blur(10px)',
            }}
            transition={{ duration: 1 }} // Transition duration
          />
        ))}
      </div>
    );
  };
  
  export default Slideshow;
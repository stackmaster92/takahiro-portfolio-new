import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import Slideshow from './Slideshow'; // Import Slideshow component
import { ABOUT_TEXT } from '../constants';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Truncate text to show only first 200 characters initially
  const truncatedText = ABOUT_TEXT.slice(0, 900) + '...';
  const displayText = isExpanded ? ABOUT_TEXT : truncatedText;

  return (
    <div className='pb-8'>
      <motion.h1
        className='my-12 text-center text-3xl sm:text-4xl'
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        About {""}
        <motion.span
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent sm:text-4xl"
          initial={{ scale: 1, opacity: 1 }}
          whileInView={{
            scale: [1, 2, 1],
            opacity: [1, 1, 1],
            transition: {
              duration: 1.5,
              times: [0, 0.5, 1],
              ease: "easeInOut",
            },
          }}
        >
          Me
        </motion.span>
      </motion.h1>

      <div className='flex flex-col lg:flex-row lg:items-start lg:gap-8'>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='w-full lg:w-1/2 mb-8 lg:mb-0'
        >
          {/* <div className='relative w-full h-64 sm:h-80 lg:h-96'> */}
          <div className='w-full h-full mb-5'>
            <Slideshow />
          </div>
        </motion.div>
        
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }} 
          className='w-full lg:w-1/2'
        >
          <div className='space-y-4'>
            <div className='text-sm leading-relaxed sm:text-base lg:text-lg text-neutral-300 space-y-2'>
              {isExpanded 
                ? (
                  <>
                    {ABOUT_TEXT.split('. ').slice(0, -1).map((sentence, index) => (
                      <p key={index} className='mb-2'>
                        {sentence.trim()}{sentence.trim().endsWith('.') ? '' : '.'}
                      </p>
                    ))}
                    <p className='mb-2 inline'>
                      {ABOUT_TEXT.split('. ').slice(-1)[0].trim()}{ABOUT_TEXT.split('. ').slice(-1)[0].trim().endsWith('.') ? '' : '.'}
                      <button
                        onClick={() => setIsExpanded(false)}
                        className='text-blue-400 hover:text-blue-300 text-base font-medium transition-colors duration-200 underline ml-2'
                      >
                        Less
                      </button>
                    </p>
                  </>
                )
                : (
                  <>
                    {truncatedText.split('. ').slice(0, -1).map((sentence, index) => (
                      <p key={index} className='mb-2'>
                        {sentence.trim()}{sentence.trim().endsWith('.') ? '' : '.'}
                      </p>
                    ))}
                    <p className='mb-2 inline'>
                      {truncatedText.split('. ').slice(-1)[0].trim()}{truncatedText.split('. ').slice(-1)[0].trim().endsWith('.') ? '' : '.'}...
                      <button
                        onClick={() => setIsExpanded(true)}
                        className='text-blue-400 hover:text-blue-300 text-base font-medium transition-colors duration-200 underline ml-2'
                      >
                        More
                      </button>
                    </p>
                  </>
                )
              }
            </div>
            
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;

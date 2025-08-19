import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <div className='pb-4'>
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className='my-12 text-center text-3xl md:text-4xl'>Experience</motion.h1>
        <div className='space-y-8'>
            {EXPERIENCES.map((experience,index)=>(
                <motion.div 
                key={index} 
                whileInView={{opacity:1,y:0}}
                initial={{opacity:0,y:50}}
                transition={{duration:0.6, delay: index * 0.1}}
                className='rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm'>
                    <div className='mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'>
                        <div className='flex-1'>
                            <h3 className='text-lg font-semibold text-white'>{experience.role}</h3>
                            <p className='text-purple-300'>{experience.company}</p>
                        </div>
                        <p className='text-sm text-neutral-400 sm:text-right'>{experience.year}</p>
                    </div>
                    
                    <div className='mb-4'>
                        <p className='text-sm leading-relaxed text-neutral-300 sm:text-base'>
                            {experience.description}
                        </p>
                    </div>
                    
                    <div className='flex flex-wrap gap-2'>
                        {experience.technologies.map((technology,techIndex)=>(
                            <span 
                            key={techIndex} 
                            className='rounded-full bg-purple-900/30 px-3 py-1 text-xs font-medium text-purple-300 border border-purple-700/30'>
                                {technology}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Experience
import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='pb-16'>
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}} 
        className='my-12 text-center text-3xl sm:text-4xl'>
            Get in touch
        </motion.h2>
        <div className='text-center space-y-4'>
            <motion.p 
              whileInView={{opacity:1,x:0}} 
              initial={{opacity:0,x:-100}} 
              transition={{duration:1}}
              className='text-sm sm:text-base text-center'
            >
              {CONTACT.address}
            </motion.p>
            <motion.p 
              whileInView={{opacity:1,x:0}} 
              initial={{opacity:0,x:100}} 
              transition={{duration:1}}
              className='text-sm sm:text-base text-center'
            >
              {CONTACT.phoneNo}
            </motion.p>
            <motion.a 
              whileInView={{opacity:1,x:0}} 
              initial={{opacity:0,x:-100}} 
              transition={{duration:1}} 
              href={`mailto:${CONTACT.email}`} 
              className='inline-block border-b border-neutral-600 hover:border-neutral-400 transition-colors text-sm sm:text-base text-center'
            >
              {CONTACT.email}
            </motion.a>
        </div>
    </div>
  )
}

export default Contact
import React, { useState, useEffect, useRef } from 'react'
import { PROJECTS } from '../constants'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// Extract technologies from description
const extractTechnologies = (description) => {
  const techKeywords = [
    // Frontend Technologies
    'React', 'React Router', 'React Native', 'Vue.js', 'Angular', 'Next.js', 
    'Webpack', 'Babel', 'Flutter', 'Figma', 'D3.js',
    // Backend Technologies
    'Node.js', 'Express.js', 'Rails', 'Laravel', 'CodeIgniter', 'Symfony', 
    'Django', 'Flask', 'FastAPI', 'TypeORM', 'WordPress', 'Shopify', 'Webflow',
    // Database Technologies
    'MongoDB', 'NoSQL', 'MySQL', 'SQLite', 'PostgreSQL', 'Redis',
    // DevOps Tools
    'EC2', 'Jenkins', 'RDS', 'Nginx', 'Kubernetes', 'Docker', 'Terraform', 
    'Ansible', 'Prometheus', 'AWS', 'CI/CD',
    // Programming Languages
    'JavaScript', 'TypeScript', 'Python', 'PHP', 'Ruby',
    // Development Practices
    'TDD', 'Test-Driven Development', 'Algorithms', 'Data Structures',
    // Version Control & Collaboration
    'Git', 'Jira', 'ESLint',
    // Blockchain
    'Solidity', 'web3.js',
    // AI & NLP Integration
    'spaCy', 'NLTK', 'transformers', 'TensorFlow', 'PyTorch', 'OpenAI', 'GPT',
    'Dialogflow', 'Rasa', 'Wit.ai',
    // Data Engineering & Processing
    'ETL', 'Airflow', 'Apache Spark', 'Pandas', 'NumPy', 'Redshift', 
    'BigQuery', 'Snowflake', 'Data Modeling', 'SQL Optimization',
    // Additional Technologies
    'GraphQL', 'Firebase', 'Redux', 'OpenTok', 'WebSocket', 'OAuth2', 
    'Stripe', 'SendBird', 'FCM'
  ]
  
  const found = techKeywords.filter(tech => 
    description.toLowerCase().includes(tech.toLowerCase())
  )
  return [...new Set(found)].slice(0, 5) // Remove duplicates and limit to 5
}

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(3)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef(null)

  // Calculate slides to show based on screen size
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }

    updateSlidesToShow()
    window.addEventListener('resize', updateSlidesToShow)
    return () => window.removeEventListener('resize', updateSlidesToShow)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % Math.ceil(PROJECTS.length / slidesToShow))
      }, 5000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying, slidesToShow])

  const totalSlides = Math.ceil(PROJECTS.length / slidesToShow)

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10s
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const getVisibleProjects = () => {
    const start = currentIndex * slidesToShow
    return PROJECTS.slice(start, start + slidesToShow)
  }

  return (
    <div className='pb-16'>
      <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className='my-12 text-center text-3xl md:text-4xl font-semibold'>Portfolio</motion.h1>
      
      <div className='relative'>
        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900/80 backdrop-blur-sm border border-neutral-700 hover:border-purple-500/50 hover:bg-neutral-800 transition-all duration-300 shadow-lg'
          aria-label="Previous portfolio"
        >
          <FaChevronLeft className='text-white text-lg hover:text-purple-300 transition-colors' />
        </button>

        <button
          onClick={goToNext}
          className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900/80 backdrop-blur-sm border border-neutral-700 hover:border-purple-500/50 hover:bg-neutral-800 transition-all duration-300 shadow-lg'
          aria-label="Next portfolio"
        >
          <FaChevronRight className='text-white text-lg hover:text-purple-300 transition-colors' />
        </button>

        {/* Slider Container */}
        <div className='overflow-hidden px-4 lg:px-0'>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
            >
              {getVisibleProjects().map((project, index) => {
                const technologies = extractTechnologies(project.description)
                const actualIndex = currentIndex * slidesToShow + index
                
                return (
                  <motion.div 
                    key={`${currentIndex}-${actualIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className='group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300'
                  >
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block h-full flex flex-col"
                    >
                      <div className='relative aspect-video w-full overflow-hidden bg-neutral-800'>
                        <img 
                          src={project.image} 
                          alt={project.name}
                          loading='lazy'
                          className='h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110' 
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300' />
                        <div className='absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/5 transition-colors duration-300' />
                        
                        {/* External link icon */}
                        <motion.div 
                          className='absolute top-4 right-4 z-10'
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className='rounded-full bg-neutral-900/80 backdrop-blur-sm p-2 border border-neutral-700 group-hover:border-purple-500/50 transition-colors'>
                            <FaExternalLinkAlt className='text-white text-sm group-hover:text-purple-300 transition-colors' />
                          </div>
                        </motion.div>
                        
                        {/* Project name overlay */}
                        <div className='absolute bottom-0 left-0 right-0 p-4'>
                          <h3 className='text-xl font-bold text-white drop-shadow-lg group-hover:text-purple-300 transition-colors'>
                            {project.name}
                          </h3>
                        </div>
                      </div>
                      
                      <div className='flex-1 flex flex-col p-6'>
                        <div className='flex-1 mb-4 overflow-hidden'>
                          <div className='text-sm leading-relaxed text-neutral-400 whitespace-pre-line group-hover:text-neutral-300 transition-colors'>
                            <div className='max-h-[140px] overflow-hidden'>
                              {project.description.trim()}
                            </div>
                          </div>
                        </div>
                        
                        {/* Technologies tags */}
                        {technologies.length > 0 && (
                          <div className='flex flex-wrap gap-2 mt-auto pt-4 border-t border-neutral-800'>
                            {technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex} 
                                className='rounded-full bg-purple-900/20 px-2.5 py-1 text-xs font-medium text-purple-300 border border-purple-700/30 group-hover:border-purple-600/50 group-hover:bg-purple-900/30 transition-colors'
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </a>
                    
                    {/* Glow effect on hover */}
                    <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10' />
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Indicators */}
        <div className='flex justify-center items-center gap-1.5 mt-8'>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{ width: '16px', height: '16px', padding: 0, margin: 0, border: 'none', minWidth: '16px', minHeight: '16px' }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'bg-purple-500'
                  : 'bg-neutral-700/60 hover:bg-neutral-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className='flex justify-center items-center gap-4 mt-6 lg:hidden'>
          <button
            onClick={goToPrevious}
            className='flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900/80 backdrop-blur-sm border border-neutral-700 hover:border-purple-500/50 hover:bg-neutral-800 transition-all duration-300'
            aria-label="Previous portfolio"
          >
            <FaChevronLeft className='text-white text-sm' />
          </button>
          <span className='text-sm text-neutral-400'>
            {currentIndex + 1} / {totalSlides}
          </span>
          <button
            onClick={goToNext}
            className='flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900/80 backdrop-blur-sm border border-neutral-700 hover:border-purple-500/50 hover:bg-neutral-800 transition-all duration-300'
            aria-label="Next portfolio"
          >
            <FaChevronRight className='text-white text-sm' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects


import React from 'react'
import { motion } from 'framer-motion'

// Auto-load all images from assets/certificates
const imageModules = import.meta.glob('../assets/certificates/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })

const toTitleCase = (str) => {
	return str
		.replace(/[-_]/g, ' ')
		.replace(/\.[^.]+$/,'')
		.replace(/\b\w/g, (c) => c.toUpperCase())
}

const images = Object.entries(imageModules)
	.map(([path, url]) => {
		const fileName = path.split('/').pop() || ''
		return { url, title: toTitleCase(fileName) }
	})
	.sort((a, b) => a.title.localeCompare(b.title))

const Certificates = () => {
	return (
		<div className='pb-4'>
			<motion.h1 
				whileInView={{opacity:1,y:0}}
				initial={{opacity:0,y:-100}}
				transition={{duration:0.5}}
				className='my-12 text-center text-3xl md:text-4xl'>Certificates</motion.h1>

			<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
				{images.map((img, index) => (
					<motion.a
						key={img.url + index}
						href={img.url}
						target="_blank"
						rel="noopener noreferrer"
						whileInView={{opacity:1,y:0}}
						initial={{opacity:0,y:30}}
						transition={{duration:0.4, delay: index * 0.05}}
						className='group block overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm hover:border-purple-700/40 hover:bg-neutral-900/70'
					>
						<div className='relative aspect-[4/3] w-full overflow-hidden'>
							<img 
								src={img.url} 
								alt={img.title}
								loading='lazy'
								className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]'
							/>
						</div>
						<div className='p-3'>
							<p className='text-sm text-neutral-200'>{img.title}</p>
						</div>
					</motion.a>
				))}
			</div>
		</div>
	)
}

export default Certificates 
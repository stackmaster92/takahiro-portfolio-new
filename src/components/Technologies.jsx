import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { BiLogoPostgresql } from "react-icons/bi"
import { SiTailwindcss } from "react-icons/si"
import {
    SiJavascript, SiTypescript,
    SiHtml5, SiCss3, SiReact, SiReactrouter,
    SiAngular, SiVuedotjs, SiNextdotjs, SiWebpack, SiBabel, SiFlutter,
    SiFigma, SiFramework7, SiKotlin, SiJetpackcompose, SiMongodb, SiExpress, SiRubyonrails,
    SiLaravel, SiCodeigniter, SiSymfony, SiDjango, SiFlask, SiTypeorm, SiWordpress, 
    SiShopify, SiMysql, SiSqlite, SiPostgresql, SiRedis
} from "react-icons/si"
import { FaNodeJs } from "react-icons/fa6"
import { FaDocker } from "react-icons/fa"
import { FaPython } from "react-icons/fa"
import { TbSql } from "react-icons/tb"
import { motion } from 'framer-motion'
import React, { memo } from 'react'

// Technology data array for better maintainability
const technologies = [
    { icon: SiHtml5, name: 'HTML5', color: 'text-orange-500', duration: 2.1 },
    { icon: SiCss3, name: 'CSS3', color: 'text-blue-500', duration: 2.4 },
    { icon: SiJavascript, name: 'JavaScript', color: 'text-yellow-400', duration: 2.3 },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-600', duration: 2.7 },
    { icon: SiReact, name: 'React', color: 'text-cyan-400', duration: 3 },
    { icon: SiReactrouter, name: 'React Router', color: 'text-red-500', duration: 3.3 },
    { icon: SiVuedotjs, name: 'Vue.js', color: 'text-green-500', duration: 2.9 },
    { icon: SiAngular, name: 'Angular', color: 'text-red-600', duration: 3.4 },
    { icon: FaPython, name: 'Python', color: '', duration: 2.5 },
    { icon: SiNextdotjs, name: 'Next.js', color: '', duration: 5 },
    { icon: SiWebpack, name: 'Webpack', color: 'text-blue-600', duration: 3.6 },
    { icon: SiBabel, name: 'Babel', color: 'text-yellow-500', duration: 3.8 },
    { icon: SiFlutter, name: 'Flutter', color: 'text-blue-500', duration: 3.5 },
    { icon: SiFigma, name: 'Figma', color: 'text-purple-500', duration: 2.6 },
    { icon: SiFramework7, name: 'Framework7', color: 'text-blue-400', duration: 3.7 },
    { icon: SiKotlin, name: 'Kotlin', color: 'text-purple-500', duration: 3.2 },
    { icon: SiJetpackcompose, name: 'Jetpack Compose', color: 'text-blue-600', duration: 3.9 },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-500', duration: 2 },
    { icon: SiExpress, name: 'Express', color: 'text-gray-600', duration: 4.2 },
    { icon: SiRubyonrails, name: 'Rails', color: 'text-red-500', duration: 4.1 },
    { icon: SiLaravel, name: 'Laravel', color: 'text-red-600', duration: 4.3 },
    { icon: SiCodeigniter, name: 'CodeIgniter', color: 'text-red-700', duration: 4.4 },
    { icon: SiSymfony, name: 'Symfony', color: 'text-black', duration: 4.5 },
    { icon: SiDjango, name: 'Django', color: 'text-green-700', duration: 4.6 },
    { icon: SiFlask, name: 'Flask', color: 'text-gray-500', duration: 4.7 },
    { icon: SiTypeorm, name: 'TypeORM', color: 'text-blue-500', duration: 4.8 },
    { icon: SiWordpress, name: 'WordPress', color: 'text-blue-600', duration: 4.9 },
    { icon: SiShopify, name: 'Shopify', color: 'text-green-600', duration: 5.1 },
    { icon: SiMysql, name: 'MySQL', color: 'text-blue-700', duration: 5.2 },
    { icon: SiSqlite, name: 'SQLite', color: 'text-green-700', duration: 5.3 },
    { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-sky-700', duration: 3.5 },
    { icon: SiRedis, name: 'Redis', color: 'text-red-500', duration: 5.4 },
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-cyan-400', duration: 4 },
    { icon: FaNodeJs, name: 'Node.js', color: 'text-green-500', duration: 6 },
    { icon: FaDocker, name: 'Docker', color: 'text-sky-700', duration: 4.5 },
    { icon: TbSql, name: 'SQL', color: '', duration: 5.5 },
]

// Memoized animation variants
const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

// Memoized Technology Icon component
const TechnologyIcon = memo(({ technology }) => {
    const { icon: Icon, name, color, duration } = technology

    return (
        <motion.div
            variants={iconVariants(duration)}
            initial='initial'
            animate='animate'
            className="rounded-xl border-2 border-neutral-800 p-3 hover:border-neutral-600 transition-colors duration-300 sm:rounded-2xl sm:border-4 sm:p-4"
            title={name}
        >
            <Icon className={`text-4xl ${color} sm:text-5xl lg:text-7xl`} />
        </motion.div>
    )
})

TechnologyIcon.displayName = 'TechnologyIcon'

const Technologies = () => {
    return (
        <div className="pb-16">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="my-12 text-center text-3xl sm:text-4xl"
            >
                Technologies
            </motion.h2>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            >
                {technologies.map((tech, index) => (
                    <TechnologyIcon key={tech.name} technology={tech} />
                ))}
            </motion.div>
        </div>
    )
}

export default memo(Technologies)
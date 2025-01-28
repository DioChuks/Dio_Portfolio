import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
   <Tilt className="xs:w-[250px] w-full">
    <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div options={{
        max: 45,
        scale: 1, 
        speed: 450
      }} className='rounded-[20px] bg-tertiary py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt={title} className='object-contain w-16 h-16'/>
        <h3 className="font-bold text-center text-white text-[20px]">{title}</h3>
      </div>
    </motion.div>
   </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I'm a pragmatic software engineer with experience in Shell, Linux, Docker, Azure cloud, Python, PHP, Javascript, Typescript, Node.js, and React, and expertise in frameworks like Laravel, Nextjs, Flask, FastAPI, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
    </motion.p>
    <div className="flex flex-wrap gap-10 mt-20">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")

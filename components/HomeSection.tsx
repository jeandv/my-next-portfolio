'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import CurrentFavTech from './CurrentFavTech';
import AboutMe from './AboutMe';
import FavProjects from './FavProjects';
import { Timeline, TimelineEvent } from './TimeLineExp';

const HomeSection = () => {
  return (
    <section className='flex flex-col justify-center items-start max-w-4xl border-gray-200 dark:border-gray-700 mx-auto mt-8 pb-16'>
      <div className='flex flex-col-reverse lg:flex-row items-start'>

        <motion.div
          className='flex flex-col pr-8'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >

          <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-3 text-black dark:text-white'>
            Jean Rondón
          </h1>

          <h2 className='flex items-center gap-2 text-gray-700 dark:text-gray-200 mb-8'>

            <span className='font-semibold tracking-tight'>Frontend</span>
            Developer

            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5' />
            </svg>

          </h2>

          <p className='text-1xl md:text-1xl text-gray-600 dark:text-gray-400'>
            I enjoy programming, I help others and whenever I can I try to learn new things {':)'}
          </p>

        </motion.div>

        <motion.div
          className='w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Image
            alt='Jean Rondón'
            height={176}
            width={176}
            src='/jean-rondon.jpg'
            sizes='30vw'
            priority
            className='rounded-3xl filter grayscale hover:grayscale-0 transition ease'
          />
        </motion.div>

      </div>

      <CurrentFavTech />

      <motion.div
        className='flex flex-col items-start'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >

        <AboutMe />

        <Timeline>

          <TimelineEvent active>

            <TimelineEvent.Title>Freelance | feb. 2022 - Currently</TimelineEvent.Title>

            <TimelineEvent.Description>
              Design and complete development of web pages/applications in a freelancer way applying agile methodologies, clean architecture, SOLID principles and pixel perfect in the projects I have done, I have developed almost all types of projects from Landing pages, Manageable stores with registration and login, Manageable blogs, dashboards, web pages with a variety of sections and more from prototyping, design using Balsamiq Wireframes, Adobe Photoshop and Figma, also from the design to the programming and migration.
            </TimelineEvent.Description>

          </TimelineEvent>

          <TimelineEvent last>

            <TimelineEvent.Title>Studio Iluxion | may. 2022 - jul. 2022</TimelineEvent.Title>

            <TimelineEvent.Description>
              Web designer and responsive web designer and frontend programmer on projects using Figma, HTML, CSS, SCSS, SASS, Bootstrap, JavaScript, jQuery implementing SCRUM, pixel perfect and clean code.
            </TimelineEvent.Description>

          </TimelineEvent>

        </Timeline>

        <FavProjects />

      </motion.div>

    </section>
  )
}

export default HomeSection;
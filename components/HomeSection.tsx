'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import CurrentFavTech from './CurrentFavTech';
import FavProjects from './FavProjects';

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

        <div className='mb-8'>

          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-5 text-black dark:text-white'>
            About me.
          </h2>

          <p className='text-gray-600 dark:text-gray-400'>
            I'm a passionate dev with +2 year of work experience in JavaScript/TypeScript, I'm a lover of page design or other things and whenever I can I try to learn new technologies since I discovered programming at 16 years old. I also use in web, mobile and desktop development Next.js, Angular, Ionic and Electron.js, to add I also have experience working in Backend with Node and in the UX design part with Figma, always implementing good practices in prototyping and coding, clean architecture, SOLID principles, pixel perfect and agile methodologies.
          </p>

        </div>

        <FavProjects />

      </motion.div>

    </section>
  )
}

export default HomeSection;
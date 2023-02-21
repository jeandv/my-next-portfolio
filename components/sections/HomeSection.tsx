'use client'

import Image from 'next/image';
import { CurrentFavTech, AboutMe, Timeline, TimelineEvent, FavProjects, ContactMe } from '../content';
import { AnimationContainer, SectionContainer } from '../utils';

export const HomeSection = () => {
  return (
    <SectionContainer>

      <div className='w-full flex justify-between flex-col-reverse lg:flex-row items-center'>

        <AnimationContainer customClassName='flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8'>

          <h1 className='font-bold text-3xl lg:text-5xl text-center lg:text-start tracking-tight mb-3 text-black dark:text-white mx-auto lg:mx-0'>
            Jean Rondón
          </h1>

          <h2 className='flex items-center gap-2 text-gray-700 dark:text-gray-200 mb-8 mx-auto lg:mx-0'>

            <span className='font-semibold tracking-tight'>Frontend</span>
            Developer

            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5' />
            </svg>

          </h2>

          <p className='text-sm lg:text-base text-center lg:text-start mb-5 lg:mb-0 text-gray-600 dark:text-gray-400 mx-auto lg:mx-0'>
            I enjoy programming and whenever I can I try to learn new things.
          </p>

        </AnimationContainer>

        <AnimationContainer customClassName='w-[80px] sm:w-[176px] relative mb-6 lg:mb-0'>
          <Image
            alt='Jean Rondón'
            height={176}
            width={176}
            src='/jean-rondon.jpg'
            sizes='30vw'
            priority
            className='rounded-3xl filter grayscale hover:grayscale-0 transition ease'
          />
        </AnimationContainer>

      </div>

      <CurrentFavTech />

      <div className='w-full flex flex-col items-start'>

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

        {/* <ProcessWork /> */}

        <ContactMe />

      </div>

    </SectionContainer>
  )
}
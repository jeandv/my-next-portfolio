'use client';

import { AnimationContainer, SectionContainer, ShowSkills, TitleSectionPageContainer } from '../utils';
import { CurrentTimeLineExp } from '../content';

const skills = [
  {
    title: 'Languages',
    techs: ['HTML', 'CSS', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Frameworks and libraries',
    techs: ['jQuery', 'Angular', 'React', 'Next.js', 'Ionic', 'Electron.js']
  },
  {
    title: 'JavaScript libraries',
    techs: ['Redux', 'TanStack Query', 'react-router-dom', 'Wouter', 'react-helmet', 'Formik', 'Jest']
  },
  {
    title: 'Preprocessors, css style, component and motion libraries',
    techs: ['Pug', 'Scss', 'Sass', 'Less', 'Bootstrap', 'Tailwind', 'ChakraUI', 'MaterialUI', 'Framer Motion']
  },
  {
    title: 'Backend stack',
    techs: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Firebase', 'Sanity CMS', 'Strapi', 'Docker']
  },
  {
    title: 'Softwares and tools',
    techs: ['VS Code', 'Jira', 'Trello', 'Git', 'GitHub', 'ESLint', 'Husky', 'WordPress', 'Elementor', 'Figma', 'Photoshop']
  },
  {
    title: 'Agile methodologies and coding principles',
    techs: ['SCRUM', 'Kanban', 'Clean Code', 'SOLID principles', 'Clean Architecture', 'Pixel perfect']
  }
];

export const AboutSection = () => {
  return (
    <SectionContainer>

      <div className='w-full flex flex-col gap-6'>

        <TitleSectionPageContainer title='About me' />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <p className='text-base text-gray-600 dark:text-gray-400'>
            I'm a passionate developer with +2 year of work experience in JavaScript/TypeScript, I'm a lover of page design or other things and whenever I can I try to learn new technologies since I discovered programming at 16 years old. I love what I do and I help others with what I can.
          </p>

          <p className='text-base text-gray-600 dark:text-gray-400'>
            I also use in web, mobile and desktop development Next.js, Angular, Ionic and Electron, to add I also have experience working in Backend with Node and in the UX design part with Figma always implementing good practices in prototyping and coding, clean architecture, SOLID principles, pixel perfect and agile methodologies for example such as the SCRUM framework.
          </p>

        </AnimationContainer>

        <CurrentTimeLineExp />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2 text-black dark:text-white text-start'>Skills and Tools</h2>

          <p className='text-base text-gray-600 dark:text-gray-400'>
            A look at all the programming languages, libraries, and tools I've worked with, I started programming about 4 years ago. I have tried a few programming languages and technology stack, both Backend and Frontend.
          </p>

          <p className='text-base text-gray-600 dark:text-gray-400'>
            Event though the scope of web development is wide, I was very interested and focused on Frontend development and UI/UX design.
          </p>

          <div className='flex flex-col items-start gap-3 mt-3'>

            {
              skills.map(({ title, techs }) => (
                <div key={title}>

                  <h3 className='font-bold text-1xl md:text-1xl tracking-tight mb-5 text-black dark:text-white text-start'>{title}</h3>

                  <AnimationContainer customClassName='flex items-center flex-wrap gap-3 mb-5'>
                    <ShowSkills skills={techs} />
                  </AnimationContainer>

                </div>
              ))
            }

          </div>

        </AnimationContainer>

        <AnimationContainer customClassName='w-full flex flex-col gap-5'>

          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2 text-black dark:text-white text-start'>Interests</h2>

          <p className='text-base text-gray-600 dark:text-gray-400'>
            I am interested in learning Backend with Java, Go or with Python. I also want to know how to make a video game with Unity or other and I am very interested in being a content creator whether programming or something else.
          </p>

          <p className='text-base text-gray-600 dark:text-gray-400'>
            For now I've decided that I'm going to get involved in each of the things I want to learn so I can figure out which one I like the most.
          </p>

        </AnimationContainer>

      </div>

    </SectionContainer>
  )
}

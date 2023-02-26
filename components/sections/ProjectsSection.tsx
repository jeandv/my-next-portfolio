'use client';

import { AnimationContainer, SectionContainer, TitleSectionPageContainer } from '../utils';
import { SearchAllProjects } from '../content';

const myGithub = 'https://github.com/jeandv';

export const ProjectsSection = () => {
  return (
    <SectionContainer>

      <div className='w-full flex flex-col gap-6'>

        <TitleSectionPageContainer title='Projects' />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <p className='w-full text-base text-gray-600 dark:text-gray-400'>
            These are most of the projects I've done since I started programming, some of them are personal projects, freelance, work, practice or for other situation. If you want to see absolutely all my projects go to my <a href={myGithub} target='_blank' rel='noopener noreferrer' className='hover:text-black dark:hover:text-white hover:underline transition-all ease'>github.com/jeandv</a>.
          </p>

        </AnimationContainer>

        <SearchAllProjects />

      </div>

    </SectionContainer>
  )
}
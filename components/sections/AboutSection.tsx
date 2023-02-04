'use client'

import '@/styles/globals.css';
import { SectionContainer } from '../utils';

export const AboutSection = () => {
  return (
    <SectionContainer>

      <div className='flex flex-col gap-6'>

        <div>
          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-8 text-black dark:text-white text-center'>
            About me
          </h2>

          <p className='text-gray-600 dark:text-gray-400'>
            I'm a passionate Frontend developer with +2 year of work experience in JavaScript/TypeScript and React, I'm a lover of page design or other things and whenever I can I try to learn new technologies since I discovered programming at 16 years old. I love what I do and I help others with what I can, I also use in web, mobile and desktop development Next.js, Angular, Ionic and Electron, to add I also have experience working in Backend with Node and in the UX design part with Figma always implementing good practices in prototyping and coding, clean architecture, SOLID principles, pixel perfect and agile methodologies for example such as the SCRUM framework.
          </p>
        </div>

        <div>
          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-8 text-black dark:text-white text-start'>
            About me
          </h2>

          <p className='text-gray-600 dark:text-gray-400'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptates architecto, sint libero, provident unde praesentium vel quos deserunt ex, similique sapiente cumque quas adipisci voluptatum assumenda quaerat ad at?
          </p>
        </div>

      </div>

    </SectionContainer>
  )
}
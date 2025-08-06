import CurrentTimeLineExp, { calculateDuration } from '../content/CurrentTimeLineExp';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import ProcessWork from '../content/ProcessWork';
import { skills } from '../utils/mySkills';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className='w-full flex flex-col gap-6'>
        <TitleSectionPageContainer title='About me' />
        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>
          <p className='text-base text-gray-400'>
            Developer with +{calculateDuration('2022-01-01', false)} of JavaScript experience and a constant interest in learning new technologies. I have solid experience in Frontend development for web, mobile, and desktop applications, using technologies and frameworks like JavaScript, TypeScript, React, Next.js, Angular, Electron.js, and Ionic. Additionally, I have skills in Backend development with Node.js, Express, and MongoDB (NoSQL). I consistently follow best practices in prototyping, coding, clean architecture, SOLID principles, pixel-perfect design, GitFlow, and agile methodologies. I am currently exploring to be DevOps, by doing projects with tools and technologies such as (AWS, CI/CD, Docker, Kubernetes, Jenkins, Terraform)
          </p>
          <p className='text-base text-gray-400 flex gap-4 justify-center items-start'>
            <a className='text-gray-400 hover:text-white inline-flex items-center gap-1' href="https://rxresu.me/jeandv/cv-jean-rondon" target="_blank">
              CV
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
            </a>
            <a className='text-gray-400 hover:text-white inline-flex items-center gap-1' href="https://www.linkedin.com/in/jeanrondon" target="_blank">
              LinkedIn
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
            </a>
            <a className='text-gray-400 hover:text-white inline-flex items-center gap-1' href="https://github.com/jeandv" target="_blank">
              GitHub
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
            </a>
          </p>
        </AnimationContainer>
        <CurrentTimeLineExp />
        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>
          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start'>Skills</h2>
          <p className='text-base text-gray-400'>
            A look at all the programming languages, libraries, and tools I've worked with, I started programming about +{calculateDuration('2020-01-01', false)} ago. I have tried a few programming languages and technology stack, both Backend and Frontend.
          </p>
          <p className='text-base text-gray-400'>
            Event though the scope of web development is wide, I was very interested and focused on Frontend development. See more in my <a href="https://github.com/jeandv" target="_blank" className="hover:text-white"><u>github.com/jeandv</u></a>
          </p>
          <div className='flex flex-col items-start gap-3 mt-3'>
            {
              skills.map(({ title, techs }) => (
                <div key={title}>
                  <h3 className='font-bold text-1xl md:text-1xl tracking-tight mb-5 text-white text-start'>{title}</h3>
                  <AnimationContainer customClassName='flex items-center flex-wrap gap-3 mb-5'>
                    <ShowSkills skills={techs} />
                  </AnimationContainer>
                </div>
              ))
            }
          </div>
        </AnimationContainer>
        <ProcessWork />
      </div>
    </SectionContainer>
  )
}

export default AboutSection;

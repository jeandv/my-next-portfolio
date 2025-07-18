import AnimationContainer from '../utils/AnimationContainer';
import { calculateDuration } from './CurrentTimeLineExp';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>
      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>
      <p className='text-base text-gray-400'>
        I'm a Frontend Developer with over {calculateDuration('2022-01-01', false)}+ years of experience specializing in JavaScript. I'm passionate about building robust web, mobile, and desktop applications using modern technologies. I adhere to best practices in every stage of development, including clean architecture, SOLID principles, pixel-perfect design, GitFlow, and agile methodologies.
      </p>
      <p className='text-base text-gray-400 flex gap-4 justify-center items-start mt-[24px]'>
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
  )
}

export default AboutMe;

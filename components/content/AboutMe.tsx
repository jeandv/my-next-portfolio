import AnimationContainer from '../utils/AnimationContainer';
import { calculateDuration } from './CurrentTimeLineExp';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>
      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>
      <p className='text-base text-gray-400'>
I am an experienced frontend developer specializing in JavaScript. I am passionate about creating robust web, mobile, and desktop applications using modern technologies. I have focused primarily on exploring new technologies, striving every day to create increasingly efficient and comprehensive solutions. I enjoy working in a team, fostering the skills of all members to form a team based on constant improvement, communication, and trust. I believe that in this field, everything has a solution and that nothing is impossible for a developer, as the only limit is oneself. One of my motivations is to make the decision every day to give my best to achieve success. I am always open to change and willing to learn whatever is necessary to achieve the objectives.
      </p>
      <p className='text-base text-gray-400 flex gap-4 justify-center items-start mt-[24px]'>
        <a className='text-gray-400 hover:text-white inline-flex items-center gap-1' href="https://rxresu.me/jeandv/cv-jean-rondon" target="_blank">
          cv
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
        </a>
        <a className='text-gray-400 hover:text-white inline-flex items-center gap-1' href="https://github.com/jeandv" target="_blank">
          code
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up-right" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
        </a>
      </p>
    </AnimationContainer>
  )
}

export default AboutMe;

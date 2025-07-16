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

    </AnimationContainer>
  )
}

export default AboutMe;

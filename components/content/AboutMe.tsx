import AnimationContainer from '../utils/AnimationContainer';
import { calculateDuration } from './CurrentTimeLineExp';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>

      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>

      <p className='text-base text-gray-400'>
       Developer with +{calculateDuration('2022-01-01', false)} years of JavaScript experience and a constant interest in learning new technologies. I have solid experience in Frontend development for web, mobile, and desktop applications, using technologies and frameworks like JavaScript, TypeScript, React, Next.js, Angular, Electron.js, and Ionic. Additionally, I have skills in Backend development with Node.js, Express, and MongoDB (NoSQL). I consistently follow best practices in prototyping, coding, clean architecture, SOLID principles, pixel-perfect design, GitFlow, and agile methodologies. I am currently exploring to be DevOps, by doing projects with tools and technologies such as (AWS, CI/CD, Docker, Kubernetes, Jenkins, Terraform)
      </p>

    </AnimationContainer>
  )
}

export default AboutMe;

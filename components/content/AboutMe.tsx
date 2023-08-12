import AnimationContainer from '../utils/AnimationContainer';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>

      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>

      <p className='text-base text-gray-400'>
        I am a passionate dev with +2 years of work experience and love learning new technologies since I discovered programming, I am currently learning the way to be a DevOps specialist.
      </p>

    </AnimationContainer>
  )
}

export default AboutMe;
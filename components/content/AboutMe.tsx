import AnimationContainer from '../utils/AnimationContainer';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>

      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>

      <p className='text-base text-gray-400'>
        I'm a passionate dev with +2 year of work experience in JavaScript/TypeScript, I'm a lover of page design or other things and whenever I can I try to learn new technologies since I discovered programming at 16 years old. <a href="#contact" className='font-semibold hover:text-white ease delay-100'><u>Contact me</u></a> if you are interested in working with me on a project or if you have any general questions about me :)
      </p>

    </AnimationContainer>
  )
}

export default AboutMe;
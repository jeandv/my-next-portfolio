import { AnimationContainer } from '../utils';

export const AboutMe = () => {
  return (
    <AnimationContainer customClassName='mb-16'>

      <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-8 text-black dark:text-white text-start'>
        About me
      </h2>

      <p className='text-gray-600 dark:text-gray-400'>
        I'm a passionate dev with +2 year of work experience in JavaScript/TypeScript, I'm a lover of page design or other things and whenever I can I try to learn new technologies since I discovered programming at 16 years old. I love what I do and I help others with what I can.
      </p>

    </AnimationContainer>
  )
}
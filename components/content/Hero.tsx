import Image from 'next/image';
import { AnimationContainer } from '../utils';

export const Hero = () => {
  return (
    <div className='w-full flex justify-between flex-col-reverse lg:flex-row items-center'>

      <AnimationContainer customClassName='flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8'>

        <h1 className='font-bold text-3xl lg:text-5xl text-center lg:text-start tracking-tight mb-3 text-black dark:text-white mx-auto lg:mx-0'>
          Jean Rondón
        </h1>

        <h2 className='flex items-center gap-2 text-1xl lg:text-1xl text-gray-700 dark:text-gray-200 mb-8 mx-auto lg:mx-0'>

          <span className='font-semibold tracking-tight'>Frontend</span>
          Developer

          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5' />
          </svg>

        </h2>

        <p className='w-full text-base text-center lg:text-start mb-5 lg:mb-0 text-gray-600 dark:text-gray-400 mx-auto lg:mx-0'>
          I enjoy programming and whenever I can I try to learn new things.
        </p>

      </AnimationContainer>

      <AnimationContainer customClassName='w-[80px] sm:w-[176px] relative mb-6 lg:mb-0'>
        <Image
          alt='Jean Rondón'
          height={176}
          width={176}
          src='/jean-rondon.jpg'
          sizes='30vw'
          priority
          className='rounded-3xl filter grayscale hover:grayscale-0 transition ease'
        />
      </AnimationContainer>

    </div>
  )
}
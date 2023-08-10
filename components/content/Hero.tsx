import Image from 'next/image';
import AnimationContainer from '../utils/AnimationContainer';

const Hero = () => {
  return (
    <div className='w-full flex justify-between flex-col-reverse lg:flex-row items-center'>

      <AnimationContainer customClassName='flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8'>

        <h1 className='font-bold text-3xl lg:text-5xl text-center lg:text-start tracking-tight mb-3 text-white mx-auto lg:mx-0'>
          Jean Rondón
        </h1>

        <h2 className='flex items-center gap-2 text-1xl lg:text-1xl text-gray-200 mb-8 mx-auto lg:mx-0'>

          <span className='font-semibold'>JavaScript</span>Developer

        </h2>

      </AnimationContainer>

      <AnimationContainer customClassName='w-[80px] sm:w-[176px] relative mb-6 lg:mb-0'>
        <Image
          alt='Jean Rondón'
          height={176}
          width={176}
          src='/jeandv.jpg'
          sizes='30vw'
          priority
          className='rounded-[8px] filter grayscale hover:grayscale-0 transition ease'
        />
      </AnimationContainer>

    </div>
  )
}

export default Hero;
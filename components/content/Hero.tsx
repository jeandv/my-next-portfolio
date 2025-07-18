import Image from 'next/image';
import AnimationContainer from '../utils/AnimationContainer';

const Hero = () => {
  return (
    <div className='w-full flex justify-between flex-col-reverse lg:flex-row items-center mb-[40px]'>
      <AnimationContainer customClassName='flex flex-col items-center lg:item-start justify-between p-0 lg:pr-8'>
        <h1 className='font-bold text-3xl lg:text-5xl text-center lg:text-start tracking-tight mb-3 text-white mx-auto lg:mx-0'>
          Jean Rondón
        </h1>
        <h2 className='flex items-center lg:items-start text-1xl lg:text-1xl text-gray-200 mb-8 mx-auto lg:mx-0'>
          <strong className='font-semibold mr-1'>Frontend</strong>Developer
        </h2>
      </AnimationContainer>
    </div>
  )
}

export default Hero;

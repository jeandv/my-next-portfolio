import AllFavTechs from '../icons/AllFavTechs';
import AnimationContainer from '../utils/AnimationContainer';

const CurrentFavTech = () => {
  return (
    <AnimationContainer customClassName='flex flex-col justify-center items-center lg:items-start mb-5 mx-auto lg:mx-0'>
      <div className='flex flex-col justify-center items-center lg:items-start'>

        <AllFavTechs />

      </div>
    </AnimationContainer>
  )
}

export default CurrentFavTech;
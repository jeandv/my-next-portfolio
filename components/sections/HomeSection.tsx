import AboutMe from '../content/AboutMe';
import ContactMe from '../content/ContactMe';
import CurrentFavTech from '../content/CurrentFavTech';
import CurrentLearning from '../content/CurrentLearning';
import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import FavProjects from '../content/FavProjects';
import Hero from '../content/Hero';
import ProcessWork from '../content/ProcessWork';
import SectionContainer from '../utils/SectionContainer';

const HomeSection = () => {
  return (
    <SectionContainer>

      <Hero />

      <CurrentFavTech />
      <CurrentLearning />

      <div className='w-full flex flex-col items-start'>

        <AboutMe />

        <CurrentTimeLineExp />

        <FavProjects />

        <ProcessWork />

        <ContactMe />

      </div>

    </SectionContainer>
  )
}

export default HomeSection;
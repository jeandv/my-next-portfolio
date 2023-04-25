import AboutMe from '../content/AboutMe';
import ContactMe from '../content/ContactMe';
import CurrentFavTech from '../content/CurrentFavTech';
import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import FavProjects from '../content/FavProjects';
import Hero from '../content/Hero';
import ProcessWork from '../content/ProcessWork';
import CirclesColorBg from '../ui/CirclesColorBg';
import SectionContainer from '../utils/SectionContainer';

const HomeSection = () => {
  return (
    <SectionContainer>

      <Hero />

      <CirclesColorBg />

      <CurrentFavTech />

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
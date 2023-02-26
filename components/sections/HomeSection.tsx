'use client';

import {
  Hero,
  CurrentFavTech,
  AboutMe,
  CurrentTimeLineExp,
  FavProjects,
  ProcessWork,
  ContactMe,
} from '../content';
import { SectionContainer } from '../utils';
import { CirclesColorBg } from '../ui';

export const HomeSection = () => {
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
import Link from 'next/link';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, useMantineTheme } from '@mantine/core';
import { AnimationContainer, SectionContainer } from '../utils';

const useStyles = createStyles((theme: any) => ({
  card: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '10px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

const Card = ({ image, title, category }: CardProps) => {

  const { classes } = useStyles();

  return (
    <Paper
      shadow='md'
      radius='md'
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size='xs'>
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
    </Paper>
  );
}

const data = [
  {
    image:
      'https://cdn.sanity.io/images/jqaxrty6/production/587bf66c35c35c26dc6c20d85e9166d236227e29-1440x806.png',
    title: 'MapsApp',
    category: 'React - Context - TypeScript - CSS - Mapbox',
  },
  {
    image:
      'https://cdn.sanity.io/images/jqaxrty6/production/0844f66435c099fb020b8235657491a3166bd713-1280x800.png',
    title: 'ISR Pokedex',
    category: 'Next.js - TypeScript - NextUI - Pokeapi',
  },
  {
    image:
      'https://cdn.sanity.io/images/jqaxrty6/production/bb12572785fdc98c304ff9823cab3f60bc16f8b7-1422x809.png',
    title: 'Github Issues',
    category: 'React - React Query - TypeScript - Bootstrap',
  },
  {
    image:
      'https://cdn.sanity.io/images/jqaxrty6/production/9d452c28dc252302b90e6e2408b81ce3ed111957-1440x803.png',
    title: 'OpenJira',
    category: 'Next.js - Context - TypeScript - Node - MongoDB - MaterialUI',
  },
  {
    image:
      'https://cdn.sanity.io/images/jqaxrty6/production/5d3fb4c2893e2ab9a3667431696b0789f004177f-1428x807.png',
    title: 'MisPelis',
    category: 'React - JavaScript - CSS',
  },
  {
    image:
      'https://cdn.sanity.io/images/jqaxrty6/production/32f71c8c2225276c64e64ce86777c3df09a878e6-1426x807.png',
    title: 'Gixfy',
    category: 'React - JavaScript - Jest - Wouter - CSS',
  }
];

const myGithub = 'https://github.com/jeandv';

export const FavProjects = () => {

  const theme = useMantineTheme();

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <SectionContainer>

      <AnimationContainer>

        <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-8 text-black dark:text-white text-start'>
          Top projects
        </h2>

        <p className='text-gray-600 dark:text-gray-400 mb-10'>
          These are my favorite projects and also the ones I consider the most complete and complex I have done, if you want to see all my projects go to my <a href={myGithub} target='_blank' rel='noopener noreferrer' className='hover:text-black dark:hover:text-white hover:font-semibold underline transition-all ease'>GitHub</a> or go to <Link href='/projects' className='hover:text-black dark:hover:text-white hover:font-semibold underline transition-all ease'>/projects</Link> (I have more projects to show here but they are still in development phase)
        </p>

        <Carousel
          slideSize='50%'
          breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
          slideGap='xl'
          align='start'
          slidesToScroll={mobile ? 1 : 2}
          withControls={false}
          style={{ cursor: 'grab' }}
          loop
        >
          {slides}
        </Carousel>

      </AnimationContainer>

    </SectionContainer>
  );
}
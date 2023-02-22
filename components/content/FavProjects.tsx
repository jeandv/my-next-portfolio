import Link from 'next/link';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, useMantineTheme } from '@mantine/core';
import { AnimationContainer } from '../utils';
import { ExternalLink } from '../ui';

const useStyles = createStyles((theme: any) => ({
  card: {
    height: 350,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-center',
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
  repo: string;
  link: string;
}

const Card = ({ image, title, category, repo, link }: CardProps) => {

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

      <div className='flex items-center justify-end gap-3'>

        <ExternalLink href={repo} customClassName='inline-flex items-center rounded-lg bg-black p-2 hover:bg-gray-800 transition-all ease duration-300'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='#fff' width='32px' height='32px' viewBox='-6 0 32 32' version='1.1'>
            <title>github</title>
            <path d='M18.36 9.28c0.48-1.72-0.24-3.6-0.28-3.72-0.12-0.28-0.4-0.52-0.72-0.52-0.080 0-1.92-0.16-3.76 1.24-1.44-0.28-3.080-0.36-3.16-0.36-0.040 0-0.040 0-0.080 0-0.080 0-1.72 0.080-3.16 0.36-1.84-1.4-3.68-1.24-3.76-1.24-0.32 0.040-0.6 0.24-0.72 0.52-0.040 0.080-0.8 2-0.28 3.72-0.92 1.28-1.64 2.96-1 5.96 0.6 2.72 2.84 4.24 5.16 4.76-0.2 0.56-0.28 1.24-0.36 1.96-0.96 0.040-1.56-0.52-2.4-1.4-0.72-0.76-1.52-1.64-2.84-1.92-0.44-0.12-0.88 0.16-1 0.64-0.080 0.48 0.2 0.92 0.68 1 0.76 0.16 1.28 0.72 1.92 1.4 0.84 0.88 1.8 1.96 3.52 1.96 0 0 0.040 0 0.040 0 0 0.92 0.080 1.8 0.12 2.52 0.040 0.48 0.44 0.8 0.92 0.76s0.8-0.44 0.76-0.92c-0.24-2.72-0.040-5.6 0.4-6 0.32-0.2 0.52-0.56 0.4-0.96-0.080-0.36-0.4-0.64-0.8-0.64-0.36 0-4.12-0.2-4.84-3.52-0.6-2.72 0.16-3.92 0.96-4.88 0.2-0.24 0.24-0.6 0.12-0.92-0.32-0.68-0.2-1.64-0.040-2.28 0.56 0.080 1.4 0.32 2.28 1.080 0.2 0.2 0.48 0.24 0.76 0.2 1.24-0.32 2.92-0.4 3.2-0.4 0.24 0 1.96 0.080 3.2 0.4 0.28 0.080 0.56 0 0.76-0.2 0.88-0.76 1.76-1 2.28-1.080 0.16 0.6 0.28 1.56-0.040 2.28-0.12 0.28-0.080 0.64 0.12 0.92 0.8 0.96 1.52 2.16 0.96 4.88-0.72 3.32-4.48 3.52-4.92 3.56-0.4 0-0.72 0.28-0.8 0.64s0.080 0.76 0.4 0.96c0.48 0.4 0.68 3.24 0.44 6-0.040 0.48 0.32 0.88 0.76 0.92 0.040 0 0.040 0 0.080 0 0.44 0 0.8-0.32 0.84-0.76 0.16-1.76 0.28-4.48-0.28-6.2 2.32-0.48 4.56-2.040 5.16-4.76 0.64-3-0.040-4.68-1-5.96z' />
          </svg>
        </ExternalLink>

        <ExternalLink href={link} customClassName='inline-flex items-center rounded-lg bg-black p-2 hover:bg-gray-800 transition-all ease duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)]'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='#fff' width='32px' height='32px' viewBox='0 0 512 512' id='Layer_1' enableBackground='new 0 0 512 512'>
            <g>
              <path d='m437.02 74.98c-48.353-48.352-112.64-74.98-181.02-74.98s-132.667 26.628-181.02 74.98-74.98 112.64-74.98 181.02 26.628 132.667 74.98 181.02 112.64 74.98 181.02 74.98 132.667-26.628 181.02-74.98 74.98-112.64 74.98-181.02-26.628-132.667-74.98-181.02zm-2.132 315.679c-15.31-10.361-31.336-19.314-47.952-26.789 7.339-28.617 11.697-59.688 12.784-91.87h79.702c-3.144 44.336-19.244 85.147-44.534 118.659zm-402.31-118.659h79.702c1.088 32.183 5.446 63.254 12.784 91.87-16.616 7.475-32.642 16.427-47.952 26.789-25.29-33.512-41.39-74.323-44.534-118.659zm44.53-150.654c15.31 10.362 31.336 19.315 47.954 26.79-7.338 28.615-11.695 59.683-12.783 91.864h-79.701c3.144-44.334 19.243-85.142 44.53-118.654zm283.519-42.581c-5.863-10.992-12.198-20.911-18.935-29.713 27.069 11.25 51.473 27.658 71.977 47.997-11.625 7.638-23.702 14.369-36.155 20.185-4.886-13.664-10.528-26.547-16.887-38.469zm-12.965 50.404c-29.211 9.792-60.039 14.831-91.662 14.831s-62.451-5.039-91.662-14.831c20.463-58.253 54.273-97.169 91.662-97.169s71.199 38.916 91.662 97.169zm-203.359 110.831c1.056-28.342 4.885-55.421 10.937-80.116 32.136 10.644 66.018 16.116 100.76 16.116s68.624-5.472 100.76-16.116c6.053 24.695 9.881 51.773 10.937 80.116zm223.394 32c-1.057 28.344-4.885 55.424-10.938 80.12-32.139-10.646-66.02-16.12-100.759-16.12s-68.62 5.474-100.759 16.12c-6.053-24.696-9.882-51.776-10.938-80.12zm-216.324-193.235c-6.358 11.922-12 24.805-16.887 38.468-12.452-5.815-24.53-12.547-36.155-20.185 20.503-20.34 44.907-36.747 71.977-47.997-6.737 8.803-13.073 18.722-18.935 29.714zm-16.886 316.008c4.886 13.661 10.528 26.542 16.885 38.462 5.863 10.992 12.198 20.911 18.935 29.713-27.067-11.25-51.469-27.655-71.971-47.992 11.625-7.637 23.701-14.368 36.151-20.183zm29.853-11.938c29.213-9.794 60.04-14.835 91.66-14.835s62.447 5.041 91.66 14.835c-20.463 58.251-54.272 97.165-91.66 97.165s-71.197-38.914-91.66-97.165zm196.287 50.4c6.357-11.92 11.999-24.801 16.885-38.462 12.451 5.815 24.527 12.547 36.151 20.183-20.502 20.337-44.904 36.743-71.971 47.992 6.737-8.802 13.073-18.721 18.935-29.713zm39.093-193.235c-1.088-32.18-5.445-63.249-12.783-91.864 16.618-7.475 32.645-16.428 47.954-26.79 25.287 33.511 41.386 74.319 44.53 118.654z' />
            </g>
          </svg>
        </ExternalLink>

      </div>
    </Paper>
  );
}

const favProjects = [
  {
    image:
      'https://cdn.sanity.io/images/jqaxrty6/production/587bf66c35c35c26dc6c20d85e9166d236227e29-1440x806.png',
    title: 'MapsApp',
    category: 'React - Context - TypeScript - CSS - Mapbox',
    repo: 'https://github.com/jeandv/maps-app',
    link: 'https://mapsapp.vercel.app'
  },
  {
    image:
      'https://cdn.sanity.io/images/jqaxrty6/production/0844f66435c099fb020b8235657491a3166bd713-1280x800.png',
    title: 'ISR Pokedex',
    category: 'Next.js - TypeScript - NextUI - Pokeapi',
    repo: 'https://github.com/jeandv/pokedex-next',
    link: 'https://pokedex-jeandv.vercel.app'
  },
  {
    image:
      'https://cdn.sanity.io/images/jqaxrty6/production/bb12572785fdc98c304ff9823cab3f60bc16f8b7-1422x809.png',
    title: 'Github Issues',
    category: 'React - React Query - TypeScript - Bootstrap',
    repo: 'https://github.com/jeandv/react-query',
    link: 'https://github.com/jeandv/react-query'
  },
  {
    image:
      'https://cdn.sanity.io/images/jqaxrty6/production/9d452c28dc252302b90e6e2408b81ce3ed111957-1440x803.png',
    title: 'OpenJira',
    category: 'Next.js - Context - TypeScript - Node - MongoDB - MaterialUI',
    repo: 'https://github.com/jeandv/open-jira',
    link: 'https://open-jira-jeandv.vercel.app'
  },
  {
    image:
      'https://cdn.sanity.io/images/jqaxrty6/production/5d3fb4c2893e2ab9a3667431696b0789f004177f-1428x807.png',
    title: 'MisPelis',
    category: 'React - JavaScript - CSS',
    repo: 'https://mispelis.vercel.app',
    link: 'https://github.com/jeandv/mispelis'
  },
  {
    image:
      'https://cdn.sanity.io/images/jqaxrty6/production/32f71c8c2225276c64e64ce86777c3df09a878e6-1426x807.png',
    title: 'Gixfy',
    category: 'React - JavaScript - Jest - Wouter',
    repo: 'https://gixfy.vercel.app',
    link: 'https://github.com/jeandv/gixfy'
  }
];

const myGithub = 'https://github.com/jeandv';

export const FavProjects = () => {

  const theme = useMantineTheme();

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  const slides = favProjects.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <AnimationContainer customClassName='w-full flex flex-col justify-center text-center lg:items-start mb-16'>

      <h2 className='font-bold text-2xl lg:text-2xl tracking-tight mb-8 text-black dark:text-white text-center lg:text-start'>
        Top projects
      </h2>

      <p className='w-full text-base text-gray-600 dark:text-gray-400 mb-10 text-start'>
        These are my favorite projects and also the ones I consider the most complete and complex I have done, if you want to see all my projects go to my <a href={myGithub} target='_blank' rel='noopener noreferrer' className='hover:text-black dark:hover:text-white underline transition-all ease'>GitHub</a> or go to <Link href='/projects' className='hover:text-black dark:hover:text-white underline transition-all ease'>/projects</Link>.
      </p>

      <Carousel
        slideSize='50%'
        breakpoints={[{ maxWidth: 'xs', slideSize: '100%', slideGap: 1 }]}
        slideGap='xs'
        align='center'
        slidesToScroll={mobile ? 1 : 2}
        withControls={false}
        style={{ width: '100%', cursor: 'grab' }}
        loop
      >
        {slides}
      </Carousel>

    </AnimationContainer>
  );
}
'use client';

import { usePathname } from 'next/navigation';

const Head = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() as string;

  const titleFixedToShow = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Jean Rondón ${pathname === '/' ? '' : '· ' + titleFixedToShow}`,
    description: `Hi! My name is Jean Rondón I'm from Venezuela and I have +3 year of work experience in JavaScript and React, I'm a lover of page design or other things and whenever I can I try to learn new technologies since I discovered programming at 16. I love what I do and I help others with what I can, I also use in web, mobile and desktop development Next.js, Angular, Ionic and Electron implementing good practices, clean architecture, pixel perfect and agile methodologies.`,
    keywords: 'Jean Rondon, Jeandv, Jean Rondon portafolio, Jeandv portafolio, Jeandv portfolio, Jean Rondon portfolio, Jeandv github, Jean Rondon github, Jeandv LinkedIn, Jean Rondon LinkedIn, Web, Desarrollo web, Programador web, Diseño web, Paginas web, Aplicaciones web, Aplicaciones móviles, Aplicaciones escritorio, Desarrollo frontend, Programador frontend, HTML, CSS, Javascript, Typescript, React, Angular.',
    type: 'website'
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='follow, index' />
      <meta content={meta.description} name='description' />
      <meta name='keywords' content={meta.keywords} />
      <meta property='og:url' content={`https://jeandv.vercel.app${pathname}`} />
      <link rel='canonical' href={`https://jeandv.vercel.app${pathname}`} />
      <link rel='me' href='mailto:jeanrdev@gmail.com' />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='Jean Rondón' />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@jeandv_' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
    </>
  )
}

export default Head;
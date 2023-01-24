// import Head from 'next/head';
// import { useRouter } from 'next/router';

const Head = () => {

  // Nota: usar useRouter para obtener las rutas donde este el user para los meta canonical, etc...
  // const { asPath } = useRouter();

  const meta = {
    title: 'Jean Rondón – Portfolio',
    description: `Hi! My name is Jean, I'm from Venezuela and I have +1 year of work experience in JavaScript/TypeScript and React, I'm a lover of page design or other things and whenever I can I try to learn new technologies since I discovered programming at 16. I love what I do and I help others with what I can, I also use in web, mobile and desktop development Next.js, Angular, Ionic and Electron implementing good practices, clean architecture, pixel perfect and agile methodologies.`,
    keywords: 'Jean Rondon, Jeandv, Jean Rondon portafolio, Jeandv portafolio, Jeandv portfolio, Jean Rondon portfolio, Jeandv github, Jean Rondon github, Jeandv LinkedIn, Jean Rondon LinkedIn, Web, Desarrollo web, Programador web, Diseño web, Paginas web, Aplicaciones web, Aplicaciones móviles, Aplicaciones escritorio, Desarrollo frontend, Programador frontend, HTML, CSS, Javascript, Typescript, React, Angular.',
    image: '../public/banner-portfolio.png',
    type: 'website'
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name='robots' content='follow, index' />
      <meta content={meta.description} name='description' />
      <meta name='keywords' content={meta.keywords} />
      <meta property='og:url' content='https://jeandv.vercel.app' />
      <link rel='canonical' href='https://jeandv.vercel.app' />
      <link rel='me' href='mailto:jeanrdev@gmail.com' />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='Jean Rondón' />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:image' content={meta.image} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@r4yb4' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
    </>
  )
}

export default Head;
'use client';

import { usePathname } from 'next/navigation';

const defaultMeta = {
  title: "Jean Rondón | Frontend Developer",
  description: "Hi my name is Jean Rondón I'm a Frontend Developer with over 3+ years of experience specializing in JavaScript. I'm passionate about building robust web, mobile, and desktop applications using modern technologies. I adhere to best practices in every stage of development, including clean architecture, SOLID principles, pixel-perfect design, GitFlow, and agile methodologies.",
  keywords: "Jean Rondon, Jean Rondón, Jeandv, Jean Rondon portafolio, Jeandv portafolio, Jeandv portfolio, Jean Rondon portfolio, Jeandv github, Jean Rondon github, Jeandv LinkedIn, Jean Rondon LinkedIn, Web, Desarrollo web, Programador web, Diseño web, Paginas web, Aplicaciones web, Aplicaciones móviles, Aplicaciones escritorio, Desarrollo frontend, Programador frontend, HTML, CSS, Javascript, Typescript, React, Angular, Nextjs, Next.js developer, venezuela frontend, venezuela developer, venezuela web developer, venezuela software engineer, venezuela software developer, venezuela software engineer, venezuela software engineer, venezuela software developer, venezuela software engineer, venezuela software developer, javascript venezuela, typescript venezuela, react venezuela, angular venezuela, nextjs venezuela, next.js venezuela, frontend developer venezuela, frontend engineer venezuela, frontend software engineer venezuela, frontend software developer venezuela",
  author: "Jean Rondón",
  twitterHandle: "@jeandv_",
  siteUrl: "https://jeanrondon.dev",
  ogImage: "https://github.com/user-attachments/assets/ab2ac857-ff3d-4c5c-b609-0d22bd64d6d5"
};

const Head = () => {
  const pathname = usePathname() || '/';
  const canonicalUrl = `${defaultMeta.siteUrl}${pathname}`;
  const titleFixedToShow = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const pageMeta = {
    ...defaultMeta,
  };

  return (
    <>
      <title>{`Jean Rondón ${pathname === '/' ? '' : '· ' + titleFixedToShow}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="follow, index" />
      <meta name="description" content={pageMeta.description} />
      <meta name="keywords" content={pageMeta.keywords} />
      <meta name="author" content={pageMeta.author} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageMeta.title} />
      <meta property="og:title" content={pageMeta.title} />
      <meta property="og:description" content={pageMeta.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={pageMeta.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={pageMeta.twitterHandle} />
      <meta name="twitter:site" content={pageMeta.twitterHandle} />
      <meta name="twitter:title" content={pageMeta.title} />
      <meta name="twitter:description" content={pageMeta.description} />
      <meta name="twitter:image" content={pageMeta.ogImage} />
    </>
  );
};

export default Head;
import { Timeline, TimelineEvent } from './TimeLineExp';

export function calculateDuration(startDate: string, showMonths: boolean): string {
  const start: Date = new Date(startDate);
  const now: Date = new Date();
  const diff: number = now.getTime() - start.getTime();
  const diffDate: Date = new Date(diff);
  const years: number = diffDate.getUTCFullYear() - 1970;
  const months: number = diffDate.getUTCMonth();

  if (years === 1 && months === 0) {
    return "1 year";
  } else if (!showMonths) {
    return `${years} years`;
  } else {
    return `${years} yr ${months} mos`;
  }
}

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title><a href='https://www.ia.com.mx' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>IA Interactive</a> · México | Mar. 2023 - {calculateDuration('2023-03-01', true)}</TimelineEvent.Title>

        <TimelineEvent.Description>
          Frontend development and maintenance of projects implementing agile methodologies and best practices such as SOLID principles, pixel perfect, clean architecture and using microfrontends practices with the following technologies and tools: Git, Bitbucket, HTML, CSS, SASS, Tailwind, JavaScript, TypeScript, React, Next.js, Redux, Jest, Storybook, Microfrontends and GitFlow.
        </TimelineEvent.Description>

        <TimelineEvent.Description>
          I have actively participated in the development and maintenance of digital projects for a leading chain in the film entertainment industry with a presence throughout Latin America and Spain. In these projects, innovative solutions were used, including one based on microfrontends alongside Storybook, which enabled the creation of isolated, highly reusable, and easy-to-maintain components.
        </TimelineEvent.Description>

        <TimelineEvent.Description>
          Efforts were also focused on achieving pixel-perfect designs, implementing clean architectures, and following GitFlow practices for optimal version control. All of this contributed to delivering high-quality digital experiences for millions of users on the platform.
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>

        <TimelineEvent.Title><a href='https://www.zima-blue.com' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>Zima-Blue</a> · Portugal | May. 2025 - {calculateDuration('2025-05-01', true)}</TimelineEvent.Title>

        <TimelineEvent.Description>
         Successfully integrated Sanity with Next.js, ensuring a seamless connection between the CMS and frontend, thereby enhancing client content management and optimizing workflow efficiency.
        </TimelineEvent.Description>

        <TimelineEvent.Description>
         Defined and structured documents and schemas within Sanity, establishing a clear, organized, and user-friendly content management system for clients.
        </TimelineEvent.Description>

        <TimelineEvent.Description>
         Engineered dynamic SEO functionalities in Sanity, empowering clients to independently modify meta tags, titles, and descriptions without requiring developer intervention.
        </TimelineEvent.Description>

        <TimelineEvent.Description>
          Implemented Portable Text for content documents, granting clients the flexibility to customize rich text elements while maintaining the integrity of the site structure.
        </TimelineEvent.Description>

        <TimelineEvent.Description>
          Optimized GROQ queries to significantly improve data loading efficiency, ensuring rapid server response times and a smoother user experience.
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>

        <TimelineEvent.Title>Freelance · Venezuela | Feb. 2022 - Mar. 2023</TimelineEvent.Title>

        <TimelineEvent.Description>
          Design and complete development of web pages/applications applying clean architecture and pixel perfect in the projects I have done, I have developed almost all types of projects from Landing pages, Manageable stores with registration and login, Manageable blogs, dashboards, web pages with a variety of sections.
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent last>

        <TimelineEvent.Title><a href='https://iluxion.pe' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>Studio Iluxion</a> · Perú | May. 2022 - Jul. 2022</TimelineEvent.Title>

        <TimelineEvent.Description>
          Web designer and responsive web designer on projects using Figma, HTML, CSS, SCSS, SASS, Bootstrap, JavaScript, jQuery implementing SCRUM, pixel perfect and clean code.
        </TimelineEvent.Description>

      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineExp;

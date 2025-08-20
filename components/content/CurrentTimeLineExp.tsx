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
    return `${years}+ years`;
  } else {
    return `${years} yr ${months} mos`;
  }
}

const CurrentTimeLineExp = () => {
  return (
    <Timeline>
      <TimelineEvent active>
        <TimelineEvent.Title><a href='https://www.ia.com.mx' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>IA Interactive</a> · México | Mar. 2023 -                     {calculateDuration('2023-03-01', true)}</TimelineEvent.Title>
        <TimelineEvent.Description>
         Actively participated in projects for a leading film entertainment chain with a presence across Latin America, Spain, and India. Focused on delivering high-quality digital experiences for millions of users.
        </TimelineEvent.Description>
        <TimelineEvent.Description>
          Collaborated cross-functionally with backend, UX, and other frontend teams, and constant comunication with clients, to ensure successful project completion and implementation.
        </TimelineEvent.Description>
        <TimelineEvent.Description>
          Optimized and refactored legacy code in multiple projects, improving performance, maintainability, and code quality.
        </TimelineEvent.Description>
        <TimelineEvent.Description>
          Implemented a microfrontend architecture to create reusable and independent components, facilitating collaborative development and enabling efficient internationalization (i18n) across all projects.
        </TimelineEvent.Description>
        <TimelineEvent.Description>
          Integrated RESTful APIs (GraphQL services), working closely with the backend team to resolve issues, comunicate impediments, and suggest improvements.
        </TimelineEvent.Description>
        <TimelineEvent.Description>
          Integrated secure payment gateways for various international payment services, ensuring successful user transactions and accurate recording of user and purchase data.
        </TimelineEvent.Description>
        <TimelineEvent.Description>
          Built and maintained desktop applications using Electron.js and Next.js, focusing on feature development and maintenance.
        </TimelineEvent.Description>
        <TimelineEvent.Description>
          Created and documented UI components in isolation using Storybook, enhancing productivity and collaboration by providing a dedicated environment for component visualization and testing.
        </TimelineEvent.Description>
        <TimelineEvent.Description>
          Implemented testing strategies using libraries like Jest, Testing Library, Vitest, etc. Ensuring the functionality and reliability of components.
        </TimelineEvent.Description>
        <TimelineEvent.Description>
          I had the opportunity to train new developers, sharing knowledge and best practices to facilitate their incorporation into the team and their successful integration into projects.
        </TimelineEvent.Description>
      </TimelineEvent>
      <TimelineEvent>
        <TimelineEvent.Title><a href='https://www.zima-blue.com' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>Zima-Blue</a> · Portugal | May. 2025 -                   {calculateDuration('2025-05-01', true)}</TimelineEvent.Title>
        <TimelineEvent.Description>
          Integrated Sanity CMS with Next.js, ensuring a smooth connection between the CMS and the frontend, improving the client's content management and optimizing the workflow.
        </TimelineEvent.Description>
        <TimelineEvent.Description>
          Defined and structured documents and schemas in Sanity, achieving a clear, organized and easy to manage content management for the client.
        </TimelineEvent.Description>
        <TimelineEvent.Description>
          Configured dynamic SEO in Sanity CMS, allowing clients to modify metatags, titles and descriptions easily without the need for development intervention.
        </TimelineEvent.Description>
        <TimelineEvent.Description>
          Implemented user interfaces that were accessible, functional and aligned to the layouts provided in Figma by the design team, ensuring a consistent and optimized end-user experience.
        </TimelineEvent.Description>
        <TimelineEvent.Description>
          Defined and structured the frontend architecture with a focus on scalability, maintainability and component reusability, facilitating the orderly and efficient construction of websites.
        </TimelineEvent.Description>
        <TimelineEvent.Description>
          Optimized GROQ queries to improve data loading efficiency, ensuring fast response times and a smoother user experience.
        </TimelineEvent.Description>
        <TimelineEvent.Description>
          Created and documented UI components in isolation using Storybook, enhancing productivity and collaboration by providing a dedicated environment for component visualization and testing.
        </TimelineEvent.Description>
      </TimelineEvent>
      <TimelineEvent last>
        <TimelineEvent.Title><a href='https://iluxion.pe' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>Studio Iluxion</a> · Perú | May. 2022 - Jul.                     2022</TimelineEvent.Title>
        <TimelineEvent.Description>
          Web designer and responsive web designer on projects using Figma, HTML, CSS, SCSS, SASS, Bootstrap, JavaScript, jQuery implementing SCRUM, pixel perfect and clean code.
        </TimelineEvent.Description>
      </TimelineEvent>
    </Timeline>
  )
}

export default CurrentTimeLineExp;

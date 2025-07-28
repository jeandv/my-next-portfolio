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
Frontend development applying best practices like SOLID principles, pixel-perfect design, clean architecture and agile methodologies. Implemented microfrontends for reusable and easily maintainable components.
        </TimelineEvent.Description>

        <TimelineEvent.Description>
          Actively participated in projects for a leading film entertainment chain with a presence across Latin America, Spain, and India. Focused on delivering high-quality digital experiences for millions of users.
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>

        <TimelineEvent.Title><a href='https://www.zima-blue.com' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>Zima-Blue</a> · Portugal | May. 2025 - {calculateDuration('2025-05-01', true)}</TimelineEvent.Title>

        <TimelineEvent.Description>
Successfully integrated Sanity with Next.js for seamless content management and optimized workflow. I defined and structured Sanity documents and schemas, creating a clear and user-friendly CMS for clients.
        </TimelineEvent.Description>

        <TimelineEvent.Description>
I also engineered dynamic SEO functionalities in Sanity, enabling clients to independently manage meta tags, titles, and descriptions. Implemented Portable Text for flexible rich text customization while maintaining site integrity.
        </TimelineEvent.Description>

        <TimelineEvent.Description>
Finally, I optimized GROQ queries to significantly improve data loading efficiency, ensuring rapid server response times and a smoother user experience.
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

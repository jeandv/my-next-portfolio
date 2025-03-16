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

        <TimelineEvent.Title><a href='https://www.ia.com.mx' target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>IA Interactive</a> | Mar. 2023 - {calculateDuration('2023-03-01', true)}</TimelineEvent.Title>

        <TimelineEvent.Description>
          Frontend development and maintenance of projects implementing agile methodologies (SCRUM) and best practices such as SOLID principles, pixel perfect, clean architecture and using microfrontends practices with the following technologies and tools: Git, Bitbucket, HTML, CSS, SASS, Tailwind, JavaScript, TypeScript, React, Next.js, Redux, Jest, Storybook, Microfrontends and GitFlow.

I have actively participated in the development and maintenance of digital projects for a leading chain in the film entertainment industry with a presence throughout Latin America and Spain. In these projects, innovative solutions were used, including one based on microfrontends alongside Storybook, which enabled the creation of isolated, highly reusable, and easy-to-maintain components.

The projects were developed using Next.js and TypeScript, technologies that significantly improved efficiency, scalability, and code robustness. Additionally, agile methodologies such as SCRUM were applied to ensure continuous and efficient delivery, along with SOLID design principles to ensure clean and maintainable code.

Efforts were also focused on achieving pixel-perfect designs, implementing clean architectures, and following GitFlow practices for optimal version control. All of this contributed to delivering high-quality digital experiences for millions of users on the platform.
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>

        <TimelineEvent.Title>Freelance | Feb. 2022 - Mar. 2023</TimelineEvent.Title>

        <TimelineEvent.Description>
          Design and development of web pages applying agile methodologies, clean architecture, SOLID principles and pixel perfect in all projects, I have developed almost all types of projects from Landing pages, stores, blogs and dashboards.
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent last>

        <TimelineEvent.Title>Studio Iluxion | May. 2022 - Jul. 2022</TimelineEvent.Title>

        <TimelineEvent.Description>
          Web designer and responsive web designer on projects using Figma, HTML, CSS, SCSS, SASS, Bootstrap, JavaScript, jQuery implementing SCRUM, pixel perfect and clean code.
        </TimelineEvent.Description>

      </TimelineEvent>

    </Timeline>
  )
}

export default CurrentTimeLineExp;

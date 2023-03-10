import { Timeline, TimelineEvent, } from './';

export const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title><a href='https://www.ia.com.mx' target='_blank' rel='noopener noreferrer' className='hover:text-black dark:hover:text-white hover:underline transition-all ease'>IA Interactive</a> | mar. 2023 - Currently</TimelineEvent.Title>

        <TimelineEvent.Description>
          Frontend development implementing agile methodologies and best practices such as SOLID principles, pixel perfect, clean architecture and clean code using the following technologies: Git, HTML, CSS, SASS, JavaScript, TypeScript, React, Next.js, Redux, others...
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent>

        <TimelineEvent.Title>Freelance | feb. 2022 - mar. 2023</TimelineEvent.Title>

        <TimelineEvent.Description>
          Design and complete development of web pages/applications in a freelancer way applying agile methodologies, clean architecture, SOLID principles and pixel perfect in the projects I have done, I have developed almost all types of projects from Landing pages, Manageable stores with registration and login, Manageable blogs, dashboards, web pages with a variety of sections and more from prototyping, design using Balsamiq Wireframes, Adobe Photoshop and Figma, also from the design to the programming and migration.
        </TimelineEvent.Description>

      </TimelineEvent>

      <TimelineEvent last>

        <TimelineEvent.Title>Studio Iluxion | may. 2022 - jul. 2022</TimelineEvent.Title>

        <TimelineEvent.Description>
          Web designer and responsive web designer and frontend programmer on projects using Figma, HTML, CSS, SCSS, SASS, Bootstrap, JavaScript, jQuery implementing SCRUM, pixel perfect and clean code.
        </TimelineEvent.Description>

      </TimelineEvent>

    </Timeline>
  )
}
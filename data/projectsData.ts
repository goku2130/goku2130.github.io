interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Personal Portfolio',
    description: `My personal portfolio and blog built with Next.js 15, Tailwind CSS, and MDX. Features dark mode, full-text search, and a responsive design optimized for performance.`,
    imgSrc: '/static/images/google.png',
    href: 'https://goku2130.github.io',
  },
  {
    title: 'Task Manager App',
    description: `A full-stack task management application with real-time updates, drag-and-drop organization, and team collaboration features. Built with React, Node.js, and PostgreSQL.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://github.com/goku2130',
  },
  {
    title: 'Weather Dashboard',
    description: `An interactive weather dashboard that displays forecasts, historical data, and weather maps. Integrates multiple APIs and uses chart.js for data visualization.`,
    imgSrc: '/static/images/ocean.jpeg',
    href: 'https://github.com/goku2130',
  },
]

export default projectsData

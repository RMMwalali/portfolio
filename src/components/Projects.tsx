import { useEffect, useRef } from 'react'

interface Project {
  num: string
  name: string
  desc: string
  tags: string[]
  year: string
  url?: string
}

const projects: Project[] = [
  {
    num: '01',
    name: 'Gigspid',
    desc: 'On-demand service marketplace connecting providers with clients. Full-stack platform with real-time geolocation, booking workflows, and dual mobile apps for providers and customers.',
    tags: ['React', 'React Native', 'Node.js', 'Geolocation', 'Mobile'],
    year: '2026',
    url: 'https://gigspid.com'
  },
  {
    num: '02',
    name: 'Silk Route Africa',
    desc: 'Compliance & information platform connecting African exporters to Chinese buyers — built for the new 0% tariff era on African exports.',
    tags: ['AI', 'Trade Tech', 'Compliance', 'Full-Stack'],
    year: '2026',
    url: 'https://silk-route-africa.vercel.app/'
  },
  {
    num: '03',
    name: 'AreaScore',
    desc: 'AI location intelligence platform that scores any area on livability, safety, amenities, flood risk, and environmental factors using multi-source data pipelines.',
    tags: ['AI', 'Data Pipelines', 'Location Intelligence', 'Python'],
    year: '2026',
    url: 'https://your-areascore.vercel.app/'
  },
  {
    num: '04',
    name: 'E-Commerce Upload Automation',
    desc: 'Python automation pipeline that uploads 1,000+ products at scale with data cleaning, browser automation via Selenium, and edge-case handling.',
    tags: ['Python', 'Selenium', 'Automation'],
    year: '2026'
  },
  {
    num: '05',
    name: 'TaxGenius',
    desc: 'Conversational AI platform that makes tax education accessible through gamified quizzes, real-time feedback, deadline calendars, and an LLM chatbot.',
    tags: ['LLM', 'Gamification', 'React', 'FastAPI'],
    year: '2025',
    url: 'https://tax-genius-main.vercel.app/'
  },
  {
    num: '06',
    name: 'Event Booking System',
    desc: 'Full-stack event management and booking platform with real-time availability, ticketing, and user dashboards built for high-traffic events.',
    tags: ['React', 'Node.js', 'REST APIs'],
    year: '2024'
  },
  {
    num: '07',
    name: 'Orderly',
    desc: 'End-to-end restaurant ops platform covering table management, orders, inventory tracking, and kitchen workflow with a clean staff-facing UI.',
    tags: ['React', 'Backend', 'Full-Stack'],
    year: '2024',
    url: 'https://orderly.co.ke/'
  }
]

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef}>
      <div className="section-label">[ 03 ] Selected Work</div>
      <div className="projects-list">
        {projects.map((project) => {
          const ProjectWrapper = project.url ? 'a' : 'div'
          const wrapperProps = project.url
            ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
            : {}

          return (
            <ProjectWrapper
              className="project-item reveal"
              key={project.num}
              {...wrapperProps}
            >
              <span className="project-num">{project.num}</span>
              <div className="project-center">
                <div className="project-name">{project.name}</div>
                <div className="project-desc">{project.desc}</div>
                <div className="project-tags-inline">
                  {project.tags.map((tag) => (
                    <span className="project-tag-sm" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-right">
                <span className="project-year">{project.year}</span>
                <span className="project-arrow">↗</span>
              </div>
            </ProjectWrapper>
          )
        })}
      </div>
    </section>
  )
}

export default Projects

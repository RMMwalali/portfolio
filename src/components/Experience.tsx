import { useEffect, useRef } from 'react'

const experiences = [
  {
    company: 'Gigspid',
    period: 'Nov 2025 – Present',
    location: 'Nairobi, Kenya · gigspid.com',
    role: 'Freelance Full Stack Developer — On-Demand Service Platform',
    bullets: [
      'Architected and shipped full-stack on-demand booking platform connecting service providers with clients in real-time.',
      'Built and deployed cross-platform mobile apps for provider and customer experiences with live location tracking.',
      'Designed matching algorithms and geolocation services for instant service discovery and route optimization.',
      'Implemented booking management, payment workflows, and push notification systems end-to-end.',
      'Maintained production infrastructure with automated deployments and monitoring for 99.9% uptime.'
    ]
  },
  {
    company: 'DM Hub',
    period: 'Feb 2025 – Nov 2025',
    location: 'Nairobi, Kenya',
    role: 'Frontend Engineer — AI & Automation Focus',
    bullets: [
      'Built responsive frontend interfaces for automation dashboards with real-time campaign and workflow monitoring.',
      'Implemented Python-based event-driven messaging and customer engagement automation at scale.',
      'Designed and integrated API-driven services for real-time marketing automation and cross-system data flow.',
      'Collaborated with backend engineers to build end-to-end automation pipelines focused on reliability and scalability.',
      'Contributed to deployment workflows and production infrastructure observability.'
    ]
  },
  {
    company: 'KCA University',
    period: 'Sep 2020 – Nov 2024',
    location: 'Nairobi, Kenya',
    role: 'BSc Software Development',
    bullets: [
      'Built strong foundations in software engineering, data structures, and system design.',
      'Completed full-stack development and API integration projects.',
      'Developed interest in AI, automation, and intelligent systems through hands-on experimentation.'
    ]
  }
]

const Experience = () => {
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
    <section id="experience" ref={sectionRef}>
      <div className="section-label">[ 05 ] Experience</div>
      {experiences.map((exp) => (
        <div className="exp-item reveal" key={exp.company}>
          <div className="exp-left">
            <div className="exp-company">{exp.company}</div>
            <div className="exp-period">{exp.period}</div>
            <div className="exp-location">{exp.location}</div>
          </div>
          <div className="exp-right">
            <div className="exp-role">{exp.role}</div>
            <ul className="exp-bullets">
              {exp.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Experience

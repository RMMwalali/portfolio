import { useEffect, useRef } from 'react'

const skills = [
  { label: 'Programming Languages', items: ['Python', 'JavaScript (ES6+)', 'TypeScript'] },
  { label: 'AI & Machine Learning', items: ['LLM APIs (OpenAI/Claude/ChatGPT)', 'Chatbot Development', 'Prompt Design', 'AI Workflows', 'Automation Systems'] },
  { label: 'Backend & APIs', items: ['REST APIs', 'API Integration', 'Backend Logic', 'Data Pipelines', 'Node.js', 'Express', 'FastAPI'] },
  { label: 'Frontend Development', items: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { label: 'Data & Processing', items: ['Data Cleaning & Validation', 'JSON/CSV Handling', 'Data Aggregation'] },
  { label: 'Tools & Collaboration', items: ['Git', 'GitHub', 'Docker', 'CI/CD Pipelines', 'Selenium'] },
  { label: 'Deployment & DevOps', items: ['Vercel', 'cPanel', 'VPS Deployment', 'Docker', 'CI/CD Pipelines', 'Nginx'] }
]

const Skills = () => {
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
    <section id="skills" ref={sectionRef}>
      <div className="section-label">[ 04 ] Capabilities</div>
      <div className="skills-grid reveal">
        {skills.map((skill) => (
          <div className="skill-block" key={skill.label}>
            <div className="skill-block-label">{skill.label}</div>
            <div className="skill-block-items">
              {skill.items.map((item) => (
                <span className="skill-pill" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

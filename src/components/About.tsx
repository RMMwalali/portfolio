import { useEffect, useRef } from 'react'

const About = () => {
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
    <section id="about" ref={sectionRef}>
      <div className="section-label">[ 02 ] About</div>
      <div className="about-grid">
        <div className="reveal">
          <p className="about-statement">Building AI systems that<br /><em>actually</em> work in the<br />real world.</p>
        </div>
        <div className="about-right reveal">
          <p className="about-body">
            I'm a curiosity-driven AI Full Stack Developer with 5 years of experience turning complex problems into clean, intelligent products. I build across the full stack — from responsive frontends to backend logic, data pipelines, and LLM-powered workflows.
          </p>
          <p className="about-body">
            My work sits at the intersection of applied AI and African tech. I care deeply about automation systems that create real impact for businesses — not just demos that look good in a pitch deck.
          </p>
          <p className="about-body">
            Currently building Silk Route Africa full time — a compliance platform connecting African exporters to Chinese buyers. Previously at DM Hub. KCA University BSc in Software Development.
          </p>
          <div className="about-tags">
            <span className="tag">LLM Integration</span>
            <span className="tag">AI Automation</span>
            <span className="tag">African Tech</span>
            <span className="tag">SaaS</span>
            <span className="tag">Fintech</span>
            <span className="tag">SME Tools</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

import { useEffect, useRef } from 'react'

const contacts = [
  { label: 'Email', value: 'ruthmwende317@gmail.com', href: 'mailto:ruthmwende317@gmail.com' },
  { label: 'Phone', value: '+254 742 310406', href: 'tel:+254742310406' },
  { label: 'GitHub', value: 'github.com/rmmwalali', href: 'https://github.com/rmmwalali' }
]

const Contact = () => {
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
    <section id="contact" style={{ borderBottom: 'none' }} ref={sectionRef}>
      <div className="section-label">[ 06 ] Let&apos;s Talk</div>
      <div className="contact-inner">
        <div className="reveal">
          <h2 className="contact-heading">Got a<br /><em>project</em><br />in mind?</h2>
        </div>
        <div className="contact-links reveal">
          {contacts.map((contact) => (
            <a
              href={contact.href}
              className="contact-link"
              key={contact.label}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <div className="contact-link-left">
                <span className="contact-link-label">{contact.label}</span>
                <span className="contact-link-value">{contact.value}</span>
              </div>
              <span className="contact-link-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact

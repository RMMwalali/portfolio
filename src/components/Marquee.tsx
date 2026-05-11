const items = [
  'React', 'Next.js', 'Python', 'Node.js', 'LLM APIs', 'FastAPI',
  'Automation', 'AI Workflows', 'Docker', 'CI/CD', 'Nairobi', 'Tailwind CSS'
]

const Marquee = () => {
  return (
    <div className="marquee-wrap">
      <div className="marquee-inner">
        {items.map((item, i) => (
          <span key={i}>{item}<span className="dot">·</span></span>
        ))}
        {items.map((item, i) => (
          <span key={`dup-${i}`}>{item}<span className="dot">·</span></span>
        ))}
      </div>
    </div>
  )
}

export default Marquee

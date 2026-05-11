const Hero = () => {
  return (
    <section className="hero" style={{ borderBottom: 'none', paddingTop: 0 }}>
      <div className="hero-grid-overlay"></div>
      <div className="hero-number">[ 01 / AI Full-Stack Developer ]</div>
      <h1 className="hero-title">
        Ruth<br /><em>Mwende</em>
      </h1>
      <div className="hero-meta">
        <div className="hero-meta-item">
          <span className="hero-meta-label">Based in</span>
          <span className="hero-meta-value">Nairobi, Kenya</span>
        </div>
        <div className="hero-meta-item">
          <span className="hero-meta-label">Experience</span>
          <span className="hero-meta-value">5 Years</span>
        </div>
        <div className="hero-meta-item">
          <span className="hero-meta-label">Speciality</span>
          <span className="hero-meta-value">AI · Automation · Full-Stack</span>
        </div>
        <div className="hero-meta-item">
          <span className="hero-meta-label">Status</span>
          <span className="hero-meta-value" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', display: 'inline-block' }}></span>
            Available for work
          </span>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  )
}

export default Hero

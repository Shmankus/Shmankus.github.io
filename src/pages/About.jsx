function About() {
  return (
    <div className="textured_bg about-page hide-scrollbar">
      <div className="about-container">

        <header className="about-hero">
          <div className="tech-badge"><span>/About</span></div>
          <h1>Shmank</h1>
          <p className="hero-subtitle">FULL-STACK DEV // SYSTEMS PROGRAMMER // CS STUDENT</p>
        </header>

        <section className="about-card">
          <div className="about-card-topbar">
            <span>/bio</span>
            <span className="about-card-status">GRADUATED MAY 2026</span>
          </div>
          <div className="about-card-content">
            <p>
              I'm a computer science student finishing up my degree at Miami University,
              building full-stack web apps and lower-level systems tools in equal measure.
              On the web side that's React, PHP, and SQL; underneath that it's C and C++,
              plus running and administering my own Linux servers. This paragraph is a
              placeholder &mdash; swap it out for your own story.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="tech-badge"><span>/Skills</span></div>
          <div className="skills-grid">

            <div className="skill-group">
              <h3 className="skill-group-title">Web</h3>
              <div className="project-card-tags">
                <span className="project-card-tag">React</span>
                <span className="project-card-tag">JavaScript</span>
                <span className="project-card-tag">PHP</span>
                <span className="project-card-tag">SQL</span>
              </div>
            </div>

            <div className="skill-group">
              <h3 className="skill-group-title">Systems</h3>
              <div className="project-card-tags">
                <span className="project-card-tag">C</span>
                <span className="project-card-tag">C++</span>
                <span className="project-card-tag">Linux Admin</span>
              </div>
            </div>

            <div className="skill-group">
              <h3 className="skill-group-title">Tools &amp; Infra</h3>
              <div className="project-card-tags">
                <span className="project-card-tag">Git</span>
                <span className="project-card-tag">Self-Hosting</span>
                <span className="project-card-tag">llama.cpp</span>
              </div>
            </div>

          </div>
        </section>

        <section className="about-section">
          <div className="tech-badge"><span>/Currently</span></div>
          <div className="focus-grid">

            <div className="focus-card">
              <div className="project-card-topbar">
                <span className="project-card-index">/ai-tutor</span>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">AI Tutor</h3>
                <p className="project-card-description">
                  A ChatGPT-API-backed tutoring app with text-to-speech, built to walk
                  through topics at whatever level you're studying at.
                </p>
              </div>
            </div>

            <div className="focus-card">
              <div className="project-card-topbar">
                <span className="project-card-index">/home-server</span>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">Home Server</h3>
                <p className="project-card-description">
                  A self-hosted Ubuntu box running the services behind this site
                  and a handful of homelab experiments.
                </p>
              </div>
            </div>

            <div className="focus-card">
              <div className="project-card-topbar">
                <span className="project-card-index">/local-llm</span>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">Local LLM Inference</h3>
                <p className="project-card-description">
                  Running models at home with llama.cpp, tuned for multi-GPU
                  acceleration.
                </p>
              </div>
            </div>

            <div className="focus-card">
              <div className="project-card-topbar">
                <span className="project-card-index">/jailbreak</span>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">iPhone Dev Projects</h3>
                <p className="project-card-description">
                  Tweaks and daemons built on a jailbroken iPhone 7 &mdash; a
                  stay-awake daemon, a network logger, and a BLE scanner.
                </p>
              </div>
            </div>

          </div>
        </section>

        <section className="about-connect">
          <div className="tech-badge"><span>/Connect</span></div>
          <a
            href="https://github.com/Shmankus"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
          >
            <span>VIEW GITHUB</span>
            <svg
              className="project-card-link-icon"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </section>

      </div>
    </div>
  );
}

export default About;

function About() {
  return (
    <div className="textured_bg about-page">
      <div className="about-scroll hide-scrollbar">
      <div className="about-container">

        <header className="about-hero">
          <div className="tech-badge"><span>/About</span></div>
          <h1>Luuk Jansen</h1>
          <p className="hero-subtitle">(FULL-STACK_DEV && SYSTEMS_PROGRAMMER && CS_GRADUATE && !DONE_LEARNING)

          </p>
        </header>

        <section className="about-card">
          <div className="about-card-topbar">
            <span>/bio</span>
            <span className="about-card-status">GRADUATED MAY 2026</span>
          </div>
          <div className="about-card-content">
            <p>
              Hi, I'm Luuk! I'm a recent Computer Science graduate from Miami University. My academic foundation includes core coursework in Data Structures, Algorithms, Systems, Databases, and Image Processing.
            </p>

            <p className="bio-lead-in">Beyond the classroom, I enjoy building practical applications and exploring new technologies:</p>

            <ul className="bio-highlights">
              <li className="bio-highlight">
                <span className="bio-highlight-title">MU Advising Assistant &amp; AI Tutor</span>
                <p className="bio-highlight-desc">
                  Co-developed an academic advising website for students and faculty as a capstone team project, alongside an AI-powered tutoring platform featuring clean web design and API integration.
                </p>
              </li>
              <li className="bio-highlight">
                <span className="bio-highlight-title">Full-Stack &amp; Hardware Projects</span>
                <p className="bio-highlight-desc">
                  Regularly build React and Node.js web applications, including custom apps for the Spotify Car Thing utilizing DeskThing and BridgeThing.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="about-section">
          <div className="tech-badge"><span>./Skills</span></div>
          <div className="skills-grid">

            <div className="skill-group">
              <h3 className="skill-group-title">Web</h3>
              <div className="project-card-tags">
                <span className="project-card-tag">React</span>
                <span className="project-card-tag">JavaScript</span>
                <span className="project-card-tag">TypeScript</span>
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
          <div className="tech-badge"><span>./Currently</span></div>
          <div className="focus-grid">

            <div className="focus-card">
              <div className="project-card-topbar">
                <span className="project-card-index">./home-server</span>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">Home Server</h3>
                <p className="project-card-description">
                  A self-hosted Ubuntu box running handful of homelab experiments and services
                
                </p>
              </div>
            </div>
            <div className="focus-card">
              <div className="project-card-topbar">
                <span className="project-card-index">./Volume_Mixer_Thing</span>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">Volume_Mixer_Thing</h3>
                <p className="project-card-description">
                  A webapp built for the BridgeThing custom firmware, With this I can control specified apps' volumes and control media playback with a nice UI
                
                </p>
              </div>
            </div>

      
            <div className="focus-card">
              <div className="project-card-topbar">
                <span className="project-card-index">./jailbreak</span>
              </div>
              <div className="project-card-content">
                <h3 className="project-card-title">iPhone Dev Projects</h3>
                <p className="project-card-description">
                  Learning how to make tweaks and apps for a jailbroken Iphone 7 running iOS 15.2.1
                </p>
              </div>
            </div>

          </div>
        </section>

        <section className="about-connect">
          <div className="tech-badge"><span>./Connect</span></div>
          <div className="about-connect-links">
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

          <a
            href="https://www.linkedin.com/in/luuk-jansen314/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
          >
            <span>VIEW LinkedIn</span>
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
          </div>
        </section>

      </div>
      </div>
    </div>
  );
}

export default About;

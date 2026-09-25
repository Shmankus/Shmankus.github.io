import ProjectCarousel from '../components/ProjectCarousel'
import ProjectCard from '../components/ProjectCard'
import projectsData from '../data/projects'
import arrowDown from '../assets/arrowDown.png'

function Home() {
  const scrollToProjects = () => {
    document.getElementById('page2')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    document.getElementById('page1')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="snap-container hide-scrollbar">

      {/* PAGE 1 */}
      <div id="page1" className="snap-page textured_bg">
        <header className="hero-header">
          <div className="hero-header-inner">
            <div className="tech-badge"><span>/Home</span></div>
            <h1>shmankus.github.io</h1>
            <p className="hero-subtitle">PROJECTS &amp; EXPERIMENTS // LUUK JANSEN</p>
          </div>
        </header>

        <main className="carousel-wrapper">
          <div id="repoSection">
            <ProjectCarousel />
          </div>
        </main>

        <footer
          onClick={scrollToProjects}
          className="more-projects-btn"
        >
          <div className="more-projects-label">
            MORE PROJECTS // SCROLL
          </div>
          <img
            src={arrowDown}
            className="more-projects-arrow-img"
            alt="downArrow"
          />
        </footer>
      </div>

      {/* PAGE 2 */}
      <div id="page2" className="snap-page textured_bg hide-scrollbar">
        <div className="projects-container">
          <div className="projects-header">
            <div
              onClick={scrollToTop}
              className="return-top-btn"
              title="Return to Home"
            >
              <img src={arrowDown} className="return-arrow-img" alt="upArrow" />
              <div className="return-top-label">
                RETURN // HOME
              </div>
            </div>
            <div className="tech-badge"><span>/Projects</span></div>
            <h2>ALL PROJECTS</h2>
            <p>Curated index of software builds, coursework, and Homelab Projects</p>
          </div>

          <div className="projects-grid">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;

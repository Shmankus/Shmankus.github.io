

import Carousel from 'react-bootstrap/Carousel';
import './App.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import worldRadio from './assets/worldRadio.jpeg'
import cellTracking from './assets/cellTracking.png'
import arrowDown from './assets/arrowDown.png'

function AppNavbar() {
  return (
    <div id="nav">
      <Navbar className="site-navbar">
        <Nav className="me-auto">
          <Nav.Link href="/About">About Me</Nav.Link>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="https://github.com/Shmankus">Github</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

function CarouselComponent() {
  return (
    <div className="carousel-chassis">
    
      <Carousel>
        <Carousel.Item interval={5000}>
          <img className="carousel-image" src="https://github.com/Shmankus/VolumeMixerBridgeThing/raw/dev/image-1.png" alt="VolumeMixerThing" />
          <Carousel.Caption>
            <h3>volumeMixerThing</h3>
            <p>WebApp for Spotify CarThing using BridgeThing</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="carousel-image" src={worldRadio} alt="worldRadio" />
          <Carousel.Caption>
            <h3>worldRadio</h3>
            <p>Uses API calls from radio garden to play world radio stations and display them</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img className="carousel-image" src={cellTracking} alt="Cell Tracking Challenge" />
          <Carousel.Caption>
            <h3>Cell Tracking Challenge</h3>
            <p>Cell Tracking Challenge completed in my image processing course</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

const projectsData = [
  {
    id: 1,
    title: "volumeMixerThing",
    description: "WebApp for Spotify CarThing using BridgeThing to control individual desktop application volumes.",
    image: "https://github.com/Shmankus/VolumeMixerBridgeThing/raw/dev/image-1.png",
    tags: ["React", "Spotify", "BridgeThing"],
    link: "https://github.com/Shmankus/VolumeMixerBridgeThing"
  },
  {
    id: 2,
    title: "worldRadio",
    description: "Uses API calls from Radio Garden to explore, play, and visualize live radio stations across the globe.",
    image: worldRadio,
    tags: ["JavaScript", "Radio Garden API", "Web Audio"],
    link: "https://github.com/Shmankus"
  },
  {
    id: 3,
    title: "Cell Tracking Challenge",
    description: "Cell tracking and segmentation algorithms completed as part of an advanced image processing course.",
    image: cellTracking,
    tags: ["Python", "Image Processing", "OpenCV"],
    link: "https://github.com/Shmankus"
  },
  {
    id: 4,
    title: "Project Alpha",
    description: "A placeholder project showcasing an upcoming tool or application. Replace with your actual project details.",
    image: "https://github.com/Shmankus/VolumeMixerBridgeThing/raw/dev/image-1.png",
    tags: ["TypeScript", "Fullstack", "API"],
    link: "https://github.com/Shmankus"
  },
  {
    id: 5,
    title: "Project Beta",
    description: "Experimental creative coding and interactive visualization. Easily customize with your repo or live link.",
    image: worldRadio,
    tags: ["React", "UI/UX", "Vite"],
    link: "https://github.com/Shmankus"
  },
  {
    id: 6,
    title: "Project Gamma",
    description: "Another exciting project in progress. Add your own screenshots, descriptions, and technology tags.",
    image: cellTracking,
    tags: ["Algorithms", "Data", "Node.js"],
    link: "https://github.com/Shmankus"
  }
];

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-card-topbar">
        <span className="project-card-index">/{project.title}</span>
     
      </div>
      <div className="project-card-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-card-image"
          loading="lazy"
        />
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>
        {project.tags && project.tags.length > 0 && (
          <div className="project-card-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="project-card-tag">{tag}</span>
            ))}
          </div>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
          >
            <span>VIEW PROJECT</span>
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
        )}
      </div>
    </div>
  );
}

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
            {CarouselComponent()}
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


function About() {
  return (
    <div class="textured_bg">
      <section>
        <div>
          <h1>shmankus.github.io</h1>
          <p>
            Repo by Luuk Jansen
          </p>
        </div>
      </section>
    </div>
  );
}


function App() {




  return (
    <BrowserRouter>
      {AppNavbar()}


      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App

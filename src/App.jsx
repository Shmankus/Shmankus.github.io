

import Carousel from 'react-bootstrap/Carousel';
import './App.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';


import worldRadio from '/worldRadio.jpeg'

function AppNavbar() {
  return (
    <div id="nav">
      <Navbar expand="lg" className="site-navbar">
        <Container>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item  interval={5000}>
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
    </Carousel>
  );
}

function Home() {
  return (
    <>

        <div class="textured_bg">
      <section>
        <div>
          <h1>shmankus.github.io</h1>
          <p>
            Repo by Luuk Jansen
          </p>
        </div>
      </section>

      <section>
        <div id="repoSection">
          {CarouselComponent()}
        </div>
      </section>
      </div>

      <section id="next-steps">
        <div id="social">
          <ul>
            <li>
              <a href="https://github.com/Shmankus" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>


          </ul>
        </div>
      </section>


    </>
  )
}


function App() {
  return (
    <BrowserRouter>
      {AppNavbar()}


      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );

}

export default App

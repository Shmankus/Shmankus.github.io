

import Carousel from 'react-bootstrap/Carousel';
import './App.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

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

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item  interval={5000}>
        <img className="carousel-image" src="https://github.com/Shmankus/VolumeMixerBridgeThing/raw/dev/image-1.png" alt="VolumeMixerThing" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="carousel-image" src="https://private-user-images.githubusercontent.com/110833850/614820577-f9b30529-24ca-400e-848a-786e0299902f.jpeg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3OTAxMDkzNDMsIm5iZiI6MTc5MDEwOTA0MywicGF0aCI6Ii8xMTA4MzM4NTAvNjE0ODIwNTc3LWY5YjMwNTI5LTI0Y2EtNDAwZS04NDhhLTc4NmUwMjk5OTAyZi5qcGVnP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI2MDkyMiUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNjA5MjJUMjAzMDQzWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9YzFiMDQ2NWExMjA2MzA1ZjJlZGY0NmExNjEwM2M2MWU3ODM1NzllYzg4NWVkODZhNDg2MjhjYTE4Y2I0NzNiNCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmcmVzcG9uc2UtY29udGVudC10eXBlPWltYWdlJTJGanBlZyJ9.G0Byv5gTCsqzH34hXhOww2CUby5I9S4PW_Gf7UrdeUs" alt="VolumeMixerThing" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

function Home() {
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

      <section>
        <div id="repoSection">
          {IndividualIntervalsExample()}
        </div>
      </section>

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


    </div>
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

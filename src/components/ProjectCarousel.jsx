import Carousel from 'react-bootstrap/Carousel';
import worldRadio from '../assets/worldRadio.jpeg'
import cellTracking from '../assets/cellTracking.png'

function ProjectCarousel() {
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

export default ProjectCarousel;

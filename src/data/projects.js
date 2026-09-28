import worldRadio from '../assets/worldRadio.jpeg'
import cellTracking from '../assets/cellTracking.png'
import dashboard from '../assets/dashboard.jpg'
import AirLogger from '../assets/AirLogger.png'
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
    title: "AirLogger",
    description: "A native iOS app for a jailbroken iPhone that passively scans the surrounding radio environment — Wi‑Fi access points and Bluetooth devices — tags each sighting with GPS, logs everything to a local database, and estimates each transmitter's physical location on an interactive map.",
    image: AirLogger,
    tags: ["Objective-C", "Fullstack", "HTML"],
    link: "https://github.com/Shmankus/AirLogger"
  },
  {
    id: 4,
    title: "Cell Tracking Challenge",
    description: "Cell tracking and segmentation algorithms completed as part of an advanced image processing course.",
    image: cellTracking,
    tags: ["Python", "Image Processing", "OpenCV"],
    link: "https://github.com/Shmankus/CSE488-Project-Cell-Tracking"
  },
  {
    id: 5,
    title: "Ubuntu Server",
    description: "HP Envy 2017 Laptop running Ubuntu, Secured with strict firewall rules and an always on VPN, This serves apps such as Jellyfin, Personal website, Navidrome, and handles development linux only development",
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/UbuntuCoF.svg/1280px-UbuntuCoF.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
    tags: ["Linux", "Ubuntu", "Cybersecurity"],
    link: ""
  },
   {
    id: 6,
    title: "RPi Server Companion",
    description: "Python script that ssh's into server over LAN and gathers info, Then displays it neatly",
    image: dashboard,
    tags: ["Linux", "DietPi", "Cybersecurity", "Python"],
    link: ""
  },


];

export default projectsData;

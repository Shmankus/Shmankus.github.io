import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';

function Navbar() {
  return (
    <div id="nav">
      <BootstrapNavbar className="site-navbar">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/About">About Me</Nav.Link>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link href="https://github.com/Shmankus">Github</Nav.Link>
        </Nav>
      </BootstrapNavbar>
    </div>
  );
}

export default Navbar;

import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';

function Navbar() {
  return (
    <div id="nav">
      <BootstrapNavbar className="site-navbar">
        <Nav className="me-auto">
          <Nav.Link href="/About">About Me</Nav.Link>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="https://github.com/Shmankus">Github</Nav.Link>
        </Nav>
      </BootstrapNavbar>
    </div>
  );
}

export default Navbar;

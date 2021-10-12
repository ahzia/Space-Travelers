import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,  Navbar, NavDropdown,Container } from 'react-bootstrap';
import logo from '../planet.png'

const NavLink = () => {
  return(
    <Navbar bg="light" expand="lg" className="">
      <Navbar.Brand href="">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Space Travelers' Hub
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="">Rockets</Nav.Link>
          <Nav.Link href="">Mission</Nav.Link>
          <Nav.Link href="">My Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>

  )
}

export default NavLink;

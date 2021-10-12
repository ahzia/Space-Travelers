
import {Nav, Navbar} from 'react-bootstrap';
import logo from '../planet.png';
import { NavLink, Router } from 'react-router-dom';

const NavBar = () => {
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
          <Nav.Link>
            <NavLink exact to="/" className="text-decoration-none text-dark" activeClassName="text-decoration-underline">Rockets</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink exact to="/Dragons" className="text-decoration-none text-dark" activeClassName="text-decoration-underline">Mission</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink exact to="/Mission" className="text-decoration-none text-dark" activeClassName="text-decoration-underline">Dragons</NavLink> 
          </Nav.Link>
          <Nav.Link>
            <NavLink exact to="/MyProfile" className="text-decoration-none text-dark" activeClassName="text-decoration-underline">My Profile</NavLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  )
}

export default NavBar;

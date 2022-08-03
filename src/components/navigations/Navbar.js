import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import Star from '../../assets/images/StarWarsLogo.png'


import React from 'react'

function NavbarCom() {
  return (
    <Navbar bg="black" variant="dark" expand="lg" >
      <Container fluid >
      <Navbar.Brand href="#home">
            <img
              alt=""
              src={Star}
              width="250"
              height="45"
              className="d-inline-block align-top"
            />{' '}
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Link className="nav-link active" to="/">Home</Link>
           <Link className="nav-link"to="/per">Personajes</Link>
           <Link className="nav-link"to="/plan">Planetas</Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarCom;

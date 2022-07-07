import React from 'react'
import {NavLink} from "react-router-dom"
import {Container, Navbar, Nav, } from "react-bootstrap"
import logoImage from "../Images/yuka.jpg"

const Header = () => {
  return (
    <div className='header'>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
        <Navbar.Brand as={NavLink} to="/">
           <img
            alt=""
            src={logoImage}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Kawa's Official Website
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={NavLink} to="/">ABOUT</Nav.Link>
            <Nav.Link as={NavLink} to="/works">WORKS</Nav.Link>
            <Nav.Link as={NavLink} to="/gallery">GALLERY</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header

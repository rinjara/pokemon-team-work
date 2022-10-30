import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return ( 
  <Navbar bg="dark" expand="lg">
  <Container>
    <Navbar.Brand >
        <NavLink to='/'>Pokemon Gallery</NavLink>
        </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        {/* <Nav.Link > */}
            <NavLink to="/">Home</NavLink>
        {/* </Nav.Link>
        <Nav.Link > */}
          <NavLink to='gallery'>Gallery</NavLink> 
           {/* </Nav.Link> */}
       </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

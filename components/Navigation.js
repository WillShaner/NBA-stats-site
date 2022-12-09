import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

function Navigation() {
  return (
    <Navbar expand="lg" align="right">
      <Container>
        <Navbar.Brand href="#home" className="text-light">NBA STATS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='text-light pt-3 justify-content-end'>
          <Nav>
            <Nav.Item><Link className="mx-2" href='/'>Home</Link></Nav.Item>
            <Nav.Item><Link className="mx-2" href='/player-list'>Search</Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
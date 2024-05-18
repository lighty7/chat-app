import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Head() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };
  const handleHome = () => {
    navigate('/');
  };
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#"  onClick={handleHome} style={{ cursor: 'pointer' }}>Chatu</Navbar.Brand>
        <Nav.Link href="#home">A Social Media application</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button variant="dark" size="lg" active className="me-2" onClick={handleLogin}>
              Login
            </Button>{' '}
            <Button variant="outline-light" size="lg" active>
              Signup
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Head;

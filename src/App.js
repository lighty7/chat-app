import './App.css';
import React from 'react';
import Head from './components/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './login/login';
import Profile from './login/profile';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Signup from './login/signup';

function MainContent() {
  const location = useLocation();
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Login />} /> {/* Default route */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {location.pathname === '/' && <DescriptionAndFooter />}
    </div>
  );
}

function DescriptionAndFooter() {
  return (
    <>
      <Container className="mt-4">
        <h2>About Chatu</h2>
        <p>
          Chatu is a social media application designed to connect people around the world. Our platform offers
          various features such as real-time messaging, media sharing, and much more to keep you connected with
          your friends and family.
        </p>

        <Row className="mt-4">
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="/img/image1.jpg" />
              <Card.Body>
                <Card.Title>Feature 1</Card.Title>
                <Card.Text>
                  Real-time messaging allows you to stay in touch with your friends and family no matter where
                  you are.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="/img/image2.jpg" />
              <Card.Body>
                <Card.Title>Feature 2</Card.Title>
                <Card.Text>
                  Share your favorite moments with your loved ones by posting photos and videos on your timeline.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="/img/image3.jpg" />
              <Card.Body>
                <Card.Title>Feature 3</Card.Title>
                <Card.Text>
                  Join communities and groups that share your interests and passions, and stay connected with
                  like-minded people.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <footer className="footer mt-5 bg-dark text-white">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <h4>Get in touch</h4>
              <h2>Contact Me</h2>
              <div className="cont-list" style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <a href="mailto:yashwanthgowda8867@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                  <ion-icon name="mail-outline" size="large"></ion-icon>
                </a>
                <a href="https://linkedin.com/in/yashwanth-hp" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                  <ion-icon name="logo-linkedin" size="large"></ion-icon>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Head />
        <MainContent />
      </div>
    </Router>
  );
}

export default App;

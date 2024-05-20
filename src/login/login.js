import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'; 
import googleImage from '../img/google.jpeg';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or authentication here
    // On success, navigate to the profile page
    navigate('/profile');
  };

  return (
    <div className="login-container">
      <Form className="login-form" onSubmit={handleSubmit}>
        <h2 className="text-center">Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="black-text">Email</Form.Label>
          <Form.Control type="email" placeholder="Type your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="black-text">Password</Form.Label>
          <Form.Control type="password" placeholder="Type your password" />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="submit" className="login-button">
            Login
          </Button>
        </div>
        <div className="text-center mt-3" style={{ color: 'black' }}>
          <span>Or Sign Up Using</span>
        </div>
        <div className="social-buttons text-center mt-2">
          <Button variant="outline-danger">
            <img src={googleImage} alt="Google Sign In" style={{ width: '35px' }} />
            <i className="fab fa-google"></i>
          </Button>
        </div>
        <div className="text-center mt-2">
          <Button variant="link">Sign Up</Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;

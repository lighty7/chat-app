import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'; 

function Login() {
  return (
    <div className="login-container">
      <Form className="login-form">
        <h2 className="text-center">Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Type your username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Type your password" />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="submit" className="login-button">
            Login
          </Button>
        </div>
        <div className="text-center mt-3" style={{color:'black'}}>
          <span>Or Sign Up Using</span>
        </div>
        <div className="social-buttons text-center mt-2">
          
          <Button variant="outline-danger">
            <i className="fab fa-google"></i>
          </Button>
        </div>
        
        <div className="text-center mt-2">
          <Button variant="link" >Sign Up</Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;

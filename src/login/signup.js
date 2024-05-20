import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here

    if (formData.password === formData.repeatPassword) {
      // Simulate a successful signup
      alert('Signup successful');
      navigate('/profile');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <MDBContainer fluid className='d-flex justify-content-center align-items-center min-vh-100'>
      <MDBCard className='text-black' style={{ borderRadius: '25px', maxWidth: '900px', width: '100%' }}>
        <MDBCardBody>
          <MDBRow className='g-0'>
            <MDBCol md='6' className='order-2 order-lg-1 d-flex flex-column align-items-center justify-content-center'>
              <h1 className="text-center fw-bold mb-4 mt-4">Sign up</h1>

              <div className="d-flex flex-row align-items-center mb-4 w-75">
                <MDBIcon fas icon="user me-3" size='lg' />
                <MDBInput label='Your Name' id='name' type='text' className='w-100' onChange={handleInputChange} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4 w-75">
                <MDBIcon fas icon="envelope me-3" size='lg' />
                <MDBInput label='Your Email' id='email' type='email' className='w-100' onChange={handleInputChange} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4 w-75">
                <MDBIcon fas icon="lock me-3" size='lg' />
                <MDBInput label='Password' id='password' type='password' className='w-100' onChange={handleInputChange} />
              </div>
              <div className="d-flex flex-row align-items-center mb-4 w-75">
                <MDBIcon fas icon="key me-3" size='lg' />
                <MDBInput label='Repeat your password' id='repeatPassword' type='password' className='w-100' onChange={handleInputChange} />
              </div>

              <MDBBtn className='mb-4' size='lg' onClick={handleSubmit}>Signup</MDBBtn>
            </MDBCol>

            <MDBCol md='6' className='order-1 order-lg-2 d-flex align-items-center justify-content-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid style={{ borderRadius: '25px', maxHeight: '400px', width: '100%' }} />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;

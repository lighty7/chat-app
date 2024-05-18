import React, { useState } from 'react';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  const [caption, setCaption] = useState('bio goes here');
  const [newCaption, setNewCaption] = useState('');

  const handleUpdateBio = (e) => {
    e.preventDefault();
    setCaption(newCaption);
    setNewCaption('');
  };

  return (
    <div style={{ color: 'white' }}>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="Login Image"
          src="/img/login.jpg"
        />
        <Figure.Caption style={{color:'white'}}>
          {caption}
        </Figure.Caption>
      </Figure>
      <Form onSubmit={handleUpdateBio}>
        <Form.Group controlId="formBio" className='mb-3'>
          <Form.Label style={{color:'grey'}}>Update Bio</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter new bio" 
            value={newCaption} 
            onChange={(e) => setNewCaption(e.target.value)} 
            style={{ width: '300px' }} // Inline style for the input field
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Bio
        </Button>
      </Form>
    </div>
  );
}

export default Login;

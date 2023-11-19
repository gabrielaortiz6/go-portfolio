import React, { useState } from 'react';
import { Form, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';


//TO DO: STYLISTIC TWEAKS TO SUBMIT BUTTON

//TO DO: ON CLICK [SUBMIT], WRITE A THANK YOU MESSAGE AND CLICK SEND 
//ANOTHER MESSAGE TO GO BACK

//TO DO: ACTUALLY SAVE THE MESSAGE ONTO A DB

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      setNameError(true);
      return;
    }
    if (!email.trim()) {
      setEmailError(true);
      return;
    }
    if (!isValidEmail(email)) {
      setEmailError(true);
      return;
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    setName('');
    setEmail('');
    setMessage('');
    setNameError(false);
    setEmailError(false);
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <Row className="p-3 justify-content-end" style={{textAlign: 'right'}}>
      <Form onSubmit={handleSubmit} style={{ fontSize: '1.5rem' }}>
        <Form.Group controlId="formName" className="m-3 mb-4">
          <Form.Label className='label'>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            isInvalid={nameError}
            style={{ fontSize: '1.2rem' }}
          />
          {nameError && <Form.Text className="text-danger">Name is required</Form.Text>}
        </Form.Group>

        <Form.Group controlId="formEmail" className="m-3 mb-4" >
          <Form.Label className='label'>Email address</Form.Label>
          <Form.Control
            type="email"
            id="email"
            placeholder="123@yahoo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={emailError}
            style={{ fontSize: '1.2rem' }}
          />
          {emailError && <Form.Text className="text-danger">Please enter a valid email address</Form.Text>}
        </Form.Group>

        <Form.Group controlId="formMessage"  className="m-3">
          <Form.Label className='label'>Message</Form.Label>
          <Form.Control
            as="textarea"
            id="message"
            rows={3}
            placeholder="Enter your message"
            value={message}
            style={{ fontSize: '1.5rem' }}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <button role="button" style={{ display: 'flex'}} className="mt-3 mb-5 form-submit-btn" type="submit" >
          Submit
        </button>
      </Form>
    </Row>
  );
};

export default Contact;
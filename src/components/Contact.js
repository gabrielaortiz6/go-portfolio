import React, { useState } from 'react';
import { Form } from 'react-bootstrap';


//TO DO: MAKE CONTACT FORM LARGER

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

    // Perform validation
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

    // Submit the form
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    setNameError(false);
    setEmailError(false);
  };

  const isValidEmail = (value) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <section className="p-3 flex-box m-4" >
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="m-3 mb-4">
          <Form.Label className='label'>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            isInvalid={nameError}
          />
          {nameError && <Form.Text className="text-danger">Name is required</Form.Text>}
        </Form.Group>

        <Form.Group controlId="formEmail" className="m-3 mb-4" >
          <Form.Label className='label'>Email address</Form.Label>
          <Form.Control
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={emailError}
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
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <button role="button" style={{ display: 'flex'}} className="mt-3 mb-5 form-submit-btn" type="submit" >
          Submit
        </button>
      </Form>
    </section>
  );
};

export default Contact;
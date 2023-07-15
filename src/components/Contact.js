import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { midPurple, textColor, darkPurple, pink } from '../colors';

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
    <section className="p-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName"  className="m-3">
          <Form.Label style={{color: textColor}}>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            isInvalid={nameError}
          />
          {nameError && <Form.Text className="text-danger">Name is required</Form.Text>}
        </Form.Group>

        <Form.Group controlId="formEmail"  className="m-3">
          <Form.Label style={{color: textColor}}>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={emailError}
          />
          {emailError && <Form.Text className="text-danger">Please enter a valid email address</Form.Text>}
        </Form.Group>

        <Form.Group controlId="formMessage"  className="m-3">
          <Form.Label style={{color: textColor}}>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <Button style={{borderColor: pink, backgroundColor: pink, color: textColor}}variant="primary" class="btn" className="m-3 btn" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
};

export default Contact;
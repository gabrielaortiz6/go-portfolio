//TO DO: MAYBE TRANSITION CHANGE - ADD GLOW TO BULLET?

import React, { useState } from 'react';
import { Container, Row, Nav, Col } from 'react-bootstrap';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import '../App.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('About');

  const handleNavigationClick = (section) => {
    console.log('Clicked on:', section);
    setActiveSection(section);
  };

  return (
      <Container fluid className="vh-100 d-flex flex-column">
      <Row className="flex-grow-1 flex-column">
      <Col xs={12} md={6} className="p-3">
    <header>
      <h1 className='header'>Gabriela M. Ortiz</h1>
      <h2 className='subheader'>Full Stack Developer </h2>
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link style={{fontSize: '1.2rem'}}
            className={activeSection === 'About' ? 'nav-link active' : 'nav-link'}
            onClick={() => handleNavigationClick('About')}
          >
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{fontSize: '1.2rem'}}
            className={activeSection === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            onClick={() => handleNavigationClick('Portfolio')}
          >
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{fontSize: '1.2rem'}}
            className={activeSection === 'Contact' ? 'nav-link active' : 'nav-link'}
            onClick={() => handleNavigationClick('Contact')}
          >
            Contact
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ fontSize: '1.2rem'}}
            className={activeSection === 'Resume' ? 'nav-link active' : 'nav-link'}
            onClick={() => handleNavigationClick('Resume')}
          >
            Resume
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </header>
      </Col>
      <Col xs={3} md={5} style={{ position: 'fixed', bottom: 0, right: 0, marginRight: '10px'}} className="p-2 d-flex justify-content-end">
      <div className="align-self-end">
      {activeSection === 'About' && <About />}
      {activeSection === 'Portfolio' && <Portfolio />}
      {activeSection === 'Contact' && <Contact />}
      {activeSection === 'Resume' && <Resume />}
      </div>
      </Col>
      </Row>
      </Container>
  );
};

export default Header;

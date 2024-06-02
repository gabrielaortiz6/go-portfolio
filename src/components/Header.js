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
      <Row className="d-flex align-items-center">
        <Col xs={6}>
          <header>
            <h1 className="header">Gabriela M. Ortiz</h1>
            <h2 className="subheader">Full Stack Developer & Creative Designer</h2>
          </header>
        </Col>
        <Col xs={6}>
          <Nav className="justify-content-between nav-stretch" activeKey={activeSection}>
            <Nav.Item>
              <Nav.Link
                style={{ fontSize: '1.2rem' }}
                className={activeSection === 'About' ? 'nav-link active' : 'nav-link'}
                onClick={() => handleNavigationClick('About')}
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{ fontSize: '1.2rem' }}
                className={activeSection === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                onClick={() => handleNavigationClick('Portfolio')}
              >
                Portfolio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{ fontSize: '1.2rem' }}
                className={activeSection === 'Contact' ? 'nav-link active' : 'nav-link'}
                onClick={() => handleNavigationClick('Contact')}
              >
                Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{ fontSize: '1.2rem' }}
                className={activeSection === 'Resume' ? 'nav-link active' : 'nav-link'}
                onClick={() => handleNavigationClick('Resume')}
              >
                Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row className="flex-grow-1">
        <Col xs={12} className="p-1">
          <div className="align-self-center">
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

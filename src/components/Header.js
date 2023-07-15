import React, { useState } from 'react';
import { lightPurple, midPurple, textColor, darkPurple, darkestPurple, pink } from '../colors';
import { Container, Row, Nav, Col } from 'react-bootstrap';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import '../Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('About');

  const handleNavigationClick = (section) => {
    console.log('Clicked on:', section);
    setActiveSection(section);
  };

  return (
      <Container fluid className="vh-100 d-flex flex-column">
      <Row className="flex-grow-1 flex-column">
      <Col xs={12} md={2} className="p-3">
    <header>
      <h1 style={{ color: pink }}>Gabriela M. Ortiz</h1>
      <p>full stack developer </p>
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link style={{color: textColor}}
            className={activeSection === 'About' ? 'nav-link active' : 'nav-link'}
            onClick={() => handleNavigationClick('About')}
          >
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{color: textColor}}
            className={activeSection === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            onClick={() => handleNavigationClick('Portfolio')}
          >
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{color: textColor}}
            className={activeSection === 'Contact' ? 'nav-link active' : 'nav-link'}
            onClick={() => handleNavigationClick('Contact')}
          >
            Contact
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{color: textColor}}
            className={activeSection === 'Resume' ? 'nav-link active' : 'nav-link'}
            onClick={() => handleNavigationClick('Resume')}
          >
            Resume
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </header>
      </Col>
      <Col xs={3} md={3} style={{ position: 'fixed', bottom: 0, right: 0 }} className="p-3 d-flex justify-content-end">
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
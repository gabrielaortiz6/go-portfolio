import React from 'react';
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
// import { faGithub, faLinkedin, faExternalLinkAlt } from '@fontawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { lightPurple, midPurple, textColor, darkPurple, darkestPurple, pink } from '../colors';

const Footer = () => {
  return (
    <footer className="fixed-bottom">
      <Container>
        <Row className="justify-content-center">
          <Col>
            <a href="https://github.com/gabrielaortiz6/" target="_blank" className="footer-link" rel="noopener noreferrer">
              GitHub↗
            </a>
          </Col>
          <Col>
            <a href="https://www.linkedin.com/in/gabriela-ortiz-74641518a/" className="footer-link"  target="_blank" rel="noopener noreferrer">
              LinkedIn↗
            </a>
          </Col>
          <Col>
            <a href="https://www.instagram.com/mieldeabeja.art/" className="footer-link" target="_blank" rel="noopener noreferrer">
              Instagram↗
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
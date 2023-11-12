//TO DO: ADJUST SPACING BETWEEN EACH
//TO DO: MAILER
import React from 'react';
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
// import { faGithub, faLinkedin, faExternalLinkAlt } from '@fontawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { greenWhite, limeGreen} from '../colors';

const Footer = () => {
  return (
    <footer className="fixed-bottom" >
      <Container style={{ color: greenWhite, fontStyle: 'italic'}}>
        <Row className="justify-content-center">
          <Col>
            (<a href="https://github.com/gabrielaortiz6/" target="_blank" style={{ color: greenWhite }} className="footer-link" rel="noopener noreferrer">
              <em>github↗</em>
            </a>)
          </Col>
          <Col>
            (<a href="https://www.linkedin.com/in/gabriela-ortiz-74641518a/" className="footer-link" style={{ color: greenWhite }} target="_blank" rel="noopener noreferrer">
             <em>linkedin↗</em>
            </a>)
          </Col>
          <Col>
            (<a href="https://www.instagram.com/mieldeabeja.art/" className="footer-link" style={{ color: greenWhite }} target="_blank" rel="noopener noreferrer">
             <em>instagram↗</em>
            </a>)
          </Col>
          <Col>
            (<a href="https://www.instagram.com/mieldeabeja.art/" className="footer-link" style={{ color: greenWhite }} target="_blank" rel="noopener noreferrer">
             <em>email↗</em>
            </a>)
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
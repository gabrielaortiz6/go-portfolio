//TO DO: ADJUST SPACING BETWEEN EACH
//TO DO: MAILER
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { greenWhite, limeGreen} from '../colors';

const Footer = () => {
  return (
    <footer className="fixed-bottom" >
      <Container style={{ color: greenWhite, fontStyle: 'italic'}}>
        <Row className="justify-content-center">
          <Col>
          <div className="link-container">
            (<a href="https://github.com/gabrielaortiz6/" target="_blank" style={{ color: greenWhite }} className="footer-link" rel="noopener noreferrer">
              github↗
            </a>)
            </div>
          </Col>
          <Col>
          <div className="link-container">
            (<a href="https://www.linkedin.com/in/gabriela-ortiz-74641518a/" className="footer-link" style={{ color: greenWhite }} target="_blank" rel="noopener noreferrer">
             linkedin↗
            </a>)
            </div>
          </Col>
          <Col>
          <div className="link-container">
            (<a href="https://www.instagram.com/mieldeabeja.art/" className="footer-link" style={{ color: greenWhite }} target="_blank" rel="noopener noreferrer">
             instagram↗
            </a>)
            </div>
          </Col>
          <Col>
          <div className="link-container">
            (<a href="https://www.instagram.com/mieldeabeja.art/" className="footer-link" style={{ color: greenWhite }} target="_blank" rel="noopener noreferrer">
             email↗
            </a>)
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
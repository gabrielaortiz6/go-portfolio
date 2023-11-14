//TO DO: MAILER
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="fixed-bottom" >
      <Container className="mt-4" style={{ fontStyle: 'italic', margin: '0px'}}>
        <Row style={{ margin: '0px'}}>
          <Col style={{ margin: '0px'}}>
          <div className="link-container">
            <a href="https://github.com/gabrielaortiz6/" target="_blank" className="link-container" rel="noopener noreferrer">
              (github)
            </a>
            </div>
          </Col>
          <Col>
          <div className="link-container">
            <a href="https://www.linkedin.com/in/gabriela-ortiz-74641518a/" className="link-container" target="_blank" rel="noopener noreferrer">
             (linkedin)
            </a>
            </div>
          </Col>
          <Col>
          <div className="link-container">
            <a href="https://www.instagram.com/mieldeabeja.art/" className="link-container" target="_blank" rel="noopener noreferrer">
             (instagram)
            </a>
            </div>
          </Col>
          <Col>
          <div className="link-container">
            <a href="https://www.instagram.com/mieldeabeja.art/" className="link-container" target="_blank" rel="noopener noreferrer">
             (email)
            </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
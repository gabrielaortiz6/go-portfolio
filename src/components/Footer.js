import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const emailAddress = 'gabriela_ortiz1@alumni.brown.edu';
  return (
    <footer className="fixed-bottom" >
      <Container className="mt-4" style={{ fontStyle: 'italic'}}>
        <Row style={{ margin: '0px', padding: '0px'}}>
          <Col style={{ margin: '0px'}}>
            <a style={{fontSize:'22px'}}href="https://github.com/gabrielaortiz6/" target="_blank" className="link-container" rel="noopener noreferrer">
              (github)
            </a>
          </Col>
          <Col>
            <a style={{fontSize:'22px'}} href="https://www.linkedin.com/in/gabriela-ortiz-74641518a/" className="link-container" target="_blank" rel="noopener noreferrer">
             (linkedin)
            </a>
          </Col>
          <Col>
            <a style={{fontSize:'22px'}} href="https://www.instagram.com/mieldeabeja.art/" className="link-container" target="_blank" rel="noopener noreferrer">
             (instagram)
            </a>
          </Col>
          <Col>
            <a style={{fontSize:'22px'}} href={`mailto:${emailAddress}`} className="link-container" target="_blank" rel="noopener noreferrer">
             (email)
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
//TO DO: FIX RIGHT MARGIN

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
// import myFace from '../path/to/your/image'; // Uncomment this if you are using an image

const AboutMe = () => {
  return (
    <Container fluid className="vh-100 d-flex justify-content-center pt-5 mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          {/* Uncomment and update the path to your image if you want to include it */}
          {/* <Image src={myFace} style={{ width: '100%' }} className="mb-3" rounded alt="About Me Image" /> */}
          <Card body className="mb-2 border-0" style={{ backgroundColor: 'transparent' }}>
            <Card.Text style={{ textAlign: 'center', lineHeight: '28px' }}>
              <p>Born in 1998 in Cienfuegos, Cuba, based in PVD, RI.</p>
              <p>Bachelor's in media theory and media production (text, visual, time-based) from Brown University.</p>
              <p>Creative designer, filmographer, photographer, writer, painter, and digital artist exploring nostalgia, nature, the ethereal, the unsettling, and entropy.</p>
              <p>Fullstack developer interested in data and design.</p>
              <p>Lover of cats.</p>
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;

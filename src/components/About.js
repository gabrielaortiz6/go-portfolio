//TO DO: FIX RIGHT MARGIN

import React from 'react';
import { Card, Container, Col, Row, Image } from 'react-bootstrap';
import myFace from '../assets/images/myface.png';

const AboutMe = () => {
  return (
      <Container style={{marginTop: '5px'}}>
        <Row className="justify-content-end" style={{marginRight: '5px'}}>
          <Col xs={6} md={9} >
            {/* <Image src={myFace} style={{ width: '95%'}} className="mb-3" rounded alt="About Me Image"/> */}
          <Card body className="mb-2 border-0" style={{ backgroundColor: 'transparent' }}>
            <Card.Text style={{ textAlign: 'right' }}>
              <p>
                Born in 1998 in Cienfuegos, Cuba, raised in Miami, FL, currently based in PVD, RI. </p>
              <p>Bachelor's in media theory and media production (text, visual, time-based)
                from Brown University. </p>
               <p>Fullstack developer interested in data and design. </p>
              <p> Lover of cats.
              </p>
            </Card.Text>
          </Card>
          </Col>
           </Row>
           </Container>
        );
};

        export default AboutMe;
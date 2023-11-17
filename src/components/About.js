//TO DO: LAYOUT EDITS
//TO DO: CONTENT EDIT
//TO DO: CHANGE IMAGE USED?

import React from 'react';
import { Card } from 'react-bootstrap';
import myFace from '../assets/images/myface.png';

const AboutMe = () => {
  return (
    <section>
      <Card body className="mb-3 border-0" style={{backgroundColor: 'transparent'}}>
        <Card.Img variant="top" className="mb-3" src={myFace} alt="About Me Image" />
        <Card.Text style={{ textAlign: 'left' }}>
          <p>
            Born in 1998 in Cienfuegos, Cuba, raised in Miami, FL, currently based in PVD, RI. </p>
            <p>Bachelor's in media theory and media production (text, visual, time-based)
            from Brown University. Fullstack developer interested in data and design. </p>
           <p> Lover of cats.
          </p>
        </Card.Text>
      </Card>
    </section>
  );
};

export default AboutMe;
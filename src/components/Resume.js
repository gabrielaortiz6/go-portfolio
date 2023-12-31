import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { limeGreen, textColor } from '../colors';

const Resume = () => {
  const proficiencies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'NoSQL', 'MySQL/Sequelize', 'MongoDB/Mongoose', 'GraphQL/Apollo'];

  return (
    <section>
      <Container>
        <Row className="mb-5" style={{marginRight: '12px'}}>
          <Col>
        <Row className="mb-3">
          <Col>
          <h3> 
          <a href="https://drive.google.com/file/d/14rNPTU2m0BRmA2EDa2LA48S9_EN7Xx0r/view?usp=sharing" download="gabriela-ortiz-resume.pdf" target="_blank" className="resume-link" style={{ textDecoration: 'none', padding: '5px', margin: '2px', fontSize: '35px'}}>
            + Resume
            </a>
          </h3>
          </Col>
        </Row>
            <h3 className="mb-3" style={{color: limeGreen, textAlign: 'right', fontSize: '32px'}}>+ Proficiencies</h3>
            <ul className="mb-5" style={{color: textColor, fontSize: '25px'}}>
              {proficiencies.map((skill, index) => (
                <li className="mb-2" style={{ textDecoration: 'none'}} key={index}>{skill}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Resume;
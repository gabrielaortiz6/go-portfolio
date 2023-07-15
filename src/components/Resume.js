import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { textColor, darkPurple, pink } from '../colors';

const Resume = () => {
  const proficiencies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'NoSQL', 'MySQL/Sequelize', 'MongoDB/Mongoose', 'Graphic Design'];

  return (
    <section>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col>
        <Row className="justify-content-center mb-5">
          <Col>
          <a href="https://drive.google.com/file/d/1HQy7zPNxPBxmzHrhtcvTfeJfaWXChTXT/view?usp=sharing" download style={{ textDecoration: 'none' }}>
            <h3 className="resume-link">Resume</h3>
            </a>
          </Col>
        </Row>
            <h4 className="mb-3" style={{color: textColor, textAlign: 'right'}}>Proficiencies</h4>
            <ul style={{color: textColor}}>
              {proficiencies.map((skill, index) => (
                <li style={{ textDecoration: 'none'}} key={index}>{skill}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Resume;
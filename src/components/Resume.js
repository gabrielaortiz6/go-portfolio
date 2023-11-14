import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { textColor } from '../colors';

const Resume = () => {
  const proficiencies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'NoSQL', 'MySQL/Sequelize', 'MongoDB/Mongoose', 'GraphQL/Apollo'];

  return (
    <section>
      <Container>
        <Row className="mb-5">
          <Col>
        <Row className="mb-3">
          <Col>
          <a href="https://drive.google.com/file/d/1HQy7zPNxPBxmzHrhtcvTfeJfaWXChTXT/view?usp=sharing" download="gabriela-ortiz-resume.pdf" target="_blank" style={{ textDecoration: 'none' }}>
            <h3 style={{textAlign: 'right'}} className="resume-link">+ Resume</h3>
            </a>
          </Col>
        </Row>
            <h4 className="mb-3" style={{color: textColor, textAlign: 'right'}}>Proficiencies</h4>
            <ul className="mb-5" style={{color: textColor}}>
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

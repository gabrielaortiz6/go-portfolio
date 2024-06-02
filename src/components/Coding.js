import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { textColor } from '../colors';
import calorieTrackerImg from '../assets/images/calorie-tracker.png';
import horiHoriImg from '../assets/images/hori-hori.png';
import schedulerImg from '../assets/images/scheduler.png';
import socialMediaImg from '../assets/images/social-media.png';
import eCommImg from '../assets/images/e-commerce.png';

const Coding = ({ onBack }) => {
  const projects = [
    {
      title: 'Hori Hori',
      image: horiHoriImg,
      deployedLink: 'https://vast-reaches-42188.herokuapp.com/',
      githubLink: 'https://github.com/PhilRug/hori-hori',
      description: 'An ecological app that allows you to track and map invasive plants in your vicinity.',
    },
    {
      title: 'Calorie Tracker',
      image: calorieTrackerImg,
      deployedLink: 'https://gabrielaortiz6.github.io/calorie-tracker/',
      githubLink: 'https://github.com/gabrielaortiz6/calorie-tracker',
      description: 'An app to track your daily caloric intake and expenditure.',
    },
    {
      title: 'E-commerce Backend',
      image: eCommImg,
      deployedLink: 'https://drive.google.com/file/d/11JwHtQp1q10oHnEOrMMgAq6MpnPt5ZuF/view',
      githubLink: 'https://github.com/gabrielaortiz6/e-commerce-app',
      description: 'Backend functionality for an e-commerce platform.',
    },
    {
      title: 'Scheduler',
      image: schedulerImg,
      deployedLink: 'https://gabrielaortiz6.github.io/schedule-maker/',
      githubLink: 'https://github.com/gabrielaortiz6/schedule-maker',
      description: 'A scheduling app to organize your tasks and events.',
    },
    {
      title: 'Social Media API',
      image: socialMediaImg,
      deployedLink: 'https://drive.google.com/file/d/1ZtGBOWBN4irzuU5LcgJzYKJ2MjXPNFBJ/view',
      githubLink: 'https://github.com/gabrielaortiz6/social-media-api',
      description: 'An API for a social media application.',
    },
  ];

  return (
    <section className='section-coding'>
      <h2 className="section-title">Coding</h2>
      <div className="back-button" onClick={onBack}>&#8592;</div>
      <div className='container-coding' style={{ padding: '20px', paddingBottom: '20px', marginBottom: '20px', height: '100vh', overflowX: 'hidden', overflowY: 'auto', borderRadius: '4px' }}>
        <Row className="g-4 mb-4">
          {projects.map((project, index) => (
            <Col key={index} xs={12} className="mb-4">
              <Row className="card-container-coding" >
                <Col xs={12} md={5}>
                  <Card border="none" className="content" style={{ marginBottom: '15px', marginTop: '5px', boxShadow: '5px 5px 15px rgba(192, 192, 192, 0.5)' }}>
                    <a className="project-link" href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                      <Card.Img className="card-image" style={{ filter: 'grayscale(75%)', width: '100%', height: 'auto' }} src={project.image} alt={project.title} />
                    </a>
                  </Card>
                </Col>
                <Col xs={12} md={4} className="d-flex flex-column">
                  <Card.Body>
                    <Card.Title className="title">
                      <a className="project-link" href={project.deployedLink} target="_blank" rel="noopener noreferrer" style={{ color: textColor, textDecoration: 'none' }}>
                        {project.title}
                      </a>
                    </Card.Title>
                    <Card.Text className="project-desc">{project.description}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Coding;
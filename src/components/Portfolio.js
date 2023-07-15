import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { lightPurple, midPurple, textColor, darkPurple, darkestPurple, pink } from '../colors';
import calorieTrackerImg from '../assets/images/calorie-tracker.png';
import horiHoriImg from '../assets/images/hori-hori.png';
import schedulerImg from '../assets/images/scheduler.png';
import socialMediaImg from '../assets/images/social-media.png';
import eCommImg from '../assets/images/e-commerce.png';
import roboArtImg from '../assets/images/robo-art.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'hori hori',
      image: horiHoriImg,
      deployedLink: 'https://vast-reaches-42188.herokuapp.com/',
      githubLink: 'https://github.com/PhilRug/hori-hori',
    },
    {
      title: 'calorie tracker',
      image: calorieTrackerImg,
      deployedLink: 'https://gabrielaortiz6.github.io/calorie-tracker/',
      githubLink: 'https://github.com/gabrielaortiz6/calorie-tracker',
    },
    {
      title: 'robo art',
      image: roboArtImg,
      deployedLink: 'google.com',
      githubLink: 'https://github.com/CJB14/Robo-art',
    },
    {
      title: 'e-commerce backend',
      image: eCommImg,
      deployedLink: 'https://drive.google.com/file/d/11JwHtQp1q10oHnEOrMMgAq6MpnPt5ZuF/view',
      githubLink: 'https://github.com/gabrielaortiz6/e-commerce-app',
    },
    {
      title: 'scheduler',
      image: schedulerImg,
      deployedLink: 'https://gabrielaortiz6.github.io/schedule-maker/',
      githubLink: 'https://github.com/gabrielaortiz6/schedule-maker',
    },
    {
      title: 'social media api',
      image: socialMediaImg,
      deployedLink: 'https://drive.google.com/file/d/1ZtGBOWBN4irzuU5LcgJzYKJ2MjXPNFBJ/view',
      githubLink: 'https://github.com/gabrielaortiz6/social-media-api',
    }
  ];

  return (
    <section>
      <div style={{ paddingTop: '35px', height: '100vh', overflowX: 'hidden', overflowY: 'auto' }}>
        <Row className="g-4 mt-8">
          {projects.map((project, index) => (
            <Col key={index} xs={12} sm={12} md={12} className="mx-0" >
              <Card style={{ border: 'none', padding: 0, background: 'none' }}>
                  <Card.Title style={{ color: textColor, display: 'inline-block', marginBottom: '2px', paddingRight: '15px' }} className="text-end">
                  <a variant="link" href={project.githubLink} style={{ display: 'inline-block', textAlign: 'right', marginRight: '5px', color: textColor }} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={16} />
                  </a>
                    <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      {project.title} </a>
                </Card.Title>
              <Card.Body>
                <div className='image-container'>
                <div className="image-overlay"></div>
                <Card.Img className="project-image" style={{ borderRadius: 0, marginTop: '1px' }} variant="top" src={project.image} alt={project.title} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </section >
  );
};

export default Portfolio;
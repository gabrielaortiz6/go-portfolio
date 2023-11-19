//TO DO: TRANSFORM THE OVERLAY
//TO DO: FIX RIGHT MARGIN

import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { textColor,} from '../colors';
import calorieTrackerImg from '../assets/images/calorie-tracker.png';
import horiHoriImg from '../assets/images/hori-hori.png';
import schedulerImg from '../assets/images/scheduler.png';
import socialMediaImg from '../assets/images/social-media.png';
import eCommImg from '../assets/images/e-commerce.png';
import roboArtImg from '../assets/images/robo-art.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'Hori Hori',
      image: horiHoriImg,
      deployedLink: 'https://vast-reaches-42188.herokuapp.com/',
      githubLink: 'https://github.com/PhilRug/hori-hori',
    },
    {
      title: 'Calorie Tracker',
      image: calorieTrackerImg,
      deployedLink: 'https://gabrielaortiz6.github.io/calorie-tracker/',
      githubLink: 'https://github.com/gabrielaortiz6/calorie-tracker',
    },
    {
      title: 'Robo Art',
      image: roboArtImg,
      deployedLink: 'google.com',
      githubLink: 'https://github.com/CJB14/Robo-art',
    },
    {
      title: 'E-commerce Backend',
      image: eCommImg,
      deployedLink: 'https://drive.google.com/file/d/11JwHtQp1q10oHnEOrMMgAq6MpnPt5ZuF/view',
      githubLink: 'https://github.com/gabrielaortiz6/e-commerce-app',
    },
    {
      title: 'Scheduler',
      image: schedulerImg,
      deployedLink: 'https://gabrielaortiz6.github.io/schedule-maker/',
      githubLink: 'https://github.com/gabrielaortiz6/schedule-maker',
    },
    {
      title: 'Social Media API',
      image: socialMediaImg,
      deployedLink: 'https://drive.google.com/file/d/1ZtGBOWBN4irzuU5LcgJzYKJ2MjXPNFBJ/view',
      githubLink: 'https://github.com/gabrielaortiz6/social-media-api',
    }
  ];

return (
  <section>
    <div className='container' 
    style={{ padding: '40px', 
    marginTop: '12px', 
    marginBottom: '10px',
    height: '100vh', 
    overflowX: 'hidden', 
    overflowY: 'auto', 
    borderRadius: '4px'}}>
      <Row className="g-4 mb-4 mt-1 justify-content-end">
        {projects.map((project, index) => (
          <Col key={index} xs={12} sm={12} md={10}>
            <Card border="none" 
            className="content"
            style={{ marginBottom: '15px', 
            marginTop: '5px', 
            background: 'none', 
            position: 'relative', 
            boxShadow: '5px 5px 15px rgba(192, 192, 192, 0.5)'}}>
              <Card.Img style={{ borderRadius: '3px', 
              marginTop: '1px',  
              filter: 'grayscale(68%)' }} 
              variant="bottom" 
              src={project.image} 
              alt={project.title} />
            <div className="image-overlay"></div>
              <Card.ImgOverlay className="content-overlay">
                <Card.Title>
                  <a className="project-link"
                  href={project.deployedLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: textColor, 
                  textDecoration: 'none'}}>
                    {project.title}
                  </a>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </section>
);
};

export default Portfolio;
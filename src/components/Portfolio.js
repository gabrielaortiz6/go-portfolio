import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Coding from './Coding';
import Filmography from './Filmography';
import Photography from './Photography';
import Visual from './Visual';
import '../App.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleBack = () => {
    setActiveSection(null);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'Coding':
       return <Coding onBack={handleBack} />;
      case 'Photography':
        return <Photography onBack={handleBack} />;
      case 'Filmography':
        return <Filmography onBack={handleBack} />;
      case 'Visual':
        return <Visual onBack={handleBack} />;
      default:
        return (
          <Row className="g-4 mb-4 mt-1">
            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card onClick={() => setActiveSection('Coding')} className="card-custom">
                <Card.Title className="card-title-custom">Coding</Card.Title>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card onClick={() => setActiveSection('Photography')} className="card-custom">
                <Card.Title className="card-title-custom">Photography</Card.Title>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card onClick={() => setActiveSection('Filmography')} className="card-custom">
                <Card.Title className="card-title-custom">Filmography</Card.Title>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
              <Card onClick={() => setActiveSection('Visual')} className="card-custom">
                <Card.Title className="card-title-custom">Visual Art</Card.Title>
              </Card>
            </Col>
          </Row>
        );
    }
  };

  return (
    <section>
      <div className="container-custom">
        {renderContent()}
      </div>
    </section>
  );
};

export default Portfolio;
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'

const Filmography = ({ onBack }) => {
  return (
    <div>
       <div className="back-button" onClick={onBack}>&#8592;</div>
      <h2>Filmography</h2>
      <p>Coming soon...</p>
    </div>
  );
};

export default Filmography;

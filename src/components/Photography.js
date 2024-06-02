import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'

// Photography.js

const Photography = ({ onBack }) => {
  return (
    <div>
      <div className="back-button" onClick={onBack}>&#8592;</div>
      <h2>Photography</h2>
      <p>Coming soon...</p>
    </div>
  );
};

export default Photography;

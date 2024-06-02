import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'

const Visual = ({ onBack }) => {
    return (
      <div>
        <div className="back-button" onClick={onBack}>&#8592;</div>
        <h2>Visual Art</h2>
        <p>Coming soon...</p>
      </div>
    );
  };
  
  export default Visual;
  
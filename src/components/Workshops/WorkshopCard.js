import React from 'react';
import './WorkshopCard.css';

const WorkshopCard = ({ title, description, buttonText, image }) => {
  return (
    <div className="workshop-card" style={{ backgroundImage: `url("${image}")` }}>
      <div className="workshop-overlay">
        <div className="workshop-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <button className="btn-tertiary">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;

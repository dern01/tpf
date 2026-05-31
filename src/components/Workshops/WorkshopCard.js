import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WorkshopCard.css';

const WorkshopCard = ({ title, description, buttonText, image }) => {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate('/workshops');
  };

  return (
    <div className="workshop-card" style={{ backgroundImage: `url("${image}")` }}>
      <div className="workshop-overlay">
        <div className="workshop-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <button className="btn-tertiary" onClick={handleBookClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;

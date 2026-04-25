import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ rating, text, author }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-rating">
        {'★'.repeat(rating)}
      </div>
      <p className="testimonial-text">{text}</p>
      <p className="testimonial-author">{author}</p>
    </div>
  );
};

export default TestimonialCard;

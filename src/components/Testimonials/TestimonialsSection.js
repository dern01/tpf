import React from 'react';
import './TestimonialsSection.css';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: '"Absolutnie niezwykłe smaki. Praliny rozpływają się w ustach, a każde pudełko to małe dzieło sztuki. Polecam z całego serca!"',
    author: '- Anna M.'
  },
  {
    id: 2,
    rating: 5,
    text: '"Uczestniczyliśmy w warsztatach dla par. Fantastyczna atmosfera i ogromna wiedza prowadzącego. Świetnie spędzony czas."',
    author: '- Piotr i Kasia'
  },
  {
    id: 3,
    rating: 5,
    text: '"Złota Edycja to idealny pomysł na prezent. Opakowanie zachwyca rzemiosłem, a zawartość to czysta poezja smaku."',
    author: '- Michał T.'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="section-header">
        <hr className="divider" />
        <h2>Co mówią nasi klienci</h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

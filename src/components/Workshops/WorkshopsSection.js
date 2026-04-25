import React from 'react';
import './WorkshopsSection.css';
import WorkshopCard from './WorkshopCard';

const workshops = [
  {
    id: 1,
    title: 'Warsztaty Indywidualne',
    description: 'Zgłębiaj tajniki sztuki cukierniczej pod okiem mistrza.',
    buttonText: 'Zarezerwuj termin',
    image: 'https://images.unsplash.com/photo-1621237279374-2c49d21c33ea?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Warsztaty Dla Par',
    description: 'Słodkie chwile we dwoje. Stwórzcie własne kompozycje smakowe.',
    buttonText: 'Zarezerwuj termin',
    image: 'https://images.unsplash.com/photo-1542841791-1925b02a2bf8?q=80&w=600&auto=format&fit=crop'
  }
];

const WorkshopsSection = () => {
  return (
    <section className="workshops-section">
      <div className="section-header">
        <hr className="divider" />
        <h2>Warsztaty Czekoladowe</h2>
      </div>
      <div className="workshops-grid">
        {workshops.map(workshop => (
          <WorkshopCard key={workshop.id} {...workshop} />
        ))}
      </div>
    </section>
  );
};

export default WorkshopsSection;

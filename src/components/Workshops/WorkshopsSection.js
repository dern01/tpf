import React from 'react';
import './WorkshopsSection.css';
import WorkshopCard from './WorkshopCard';

const workshops = [
  {
    id: 1,
    title: 'Warsztaty Indywidualne',
    description: 'Zgłębiaj tajniki sztuki cukierniczej pod okiem mistrza.',
    buttonText: 'Zarezerwuj termin',
    image: 'https://images.unsplash.com/photo-1519733870-f96bef9bc85f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    title: 'Warsztaty Dla Par',
    description: 'Słodkie chwile we dwoje. Stwórzcie własne kompozycje smakowe.',
    buttonText: 'Zarezerwuj termin',
    image: 'https://images.unsplash.com/photo-1630507103234-00d3e621cae2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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

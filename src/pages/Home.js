import React from 'react';
import Hero from '../components/Hero/Hero';
import CollectionGrid from '../components/CollectionGrid/CollectionGrid';
import WorkshopsSection from '../components/Workshops/WorkshopsSection';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';

const Home = () => {
  return (
    <main>
      <Hero />
      <CollectionGrid />
      <WorkshopsSection />
      <TestimonialsSection />
    </main>
  );
};

export default Home;

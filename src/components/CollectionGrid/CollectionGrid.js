import React from 'react';
import './CollectionGrid.css';
import CollectionItem from './CollectionItem';

const collections = [
  {
    id: 1,
    title: 'Kolekcja Wiosenna',
    price: '89 PLN',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Klasyka Gatunku',
    price: '75 PLN',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Egzotyczna Podróż',
    price: '95 PLN',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Złota Edycja',
    price: '120 PLN',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400&auto=format&fit=crop',
  }
];

const CollectionGrid = () => {
  return (
    <section className="collections-section">
      <div className="section-header">
        <hr className="divider" />
        <h2>Nasze Kolekcje</h2>
      </div>
      <div className="collection-grid">
        {collections.map(item => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default CollectionGrid;

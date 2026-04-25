import React from 'react';
import './CollectionGrid.css';
import CollectionItem from './CollectionItem';

const collections = [
  {
    id: 1,
    title: 'Kolekcja Wiosenna',
    price: '89 PLN',
    image: 'https://placehold.co/400x400/1e3b26/ffffff?text=Wiosenna',
  },
  {
    id: 2,
    title: 'Klasyka Gatunku',
    price: '75 PLN',
    image: 'https://placehold.co/400x400/181818/ffffff?text=Klasyka',
  },
  {
    id: 3,
    title: 'Egzotyczna Podróż',
    price: '95 PLN',
    image: 'https://placehold.co/400x400/2a2007/ffffff?text=Egzotyczna',
  },
  {
    id: 4,
    title: 'Złota Edycja',
    price: '120 PLN',
    image: 'https://placehold.co/400x400/0f171e/ffffff?text=Złota',
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

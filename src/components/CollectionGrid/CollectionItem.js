import React from 'react';
import './CollectionItem.css';

const CollectionItem = ({ title, price, image }) => {
  return (
    <div className="collection-item">
      <div className="item-image-wrapper">
        <img src={image} alt={title} className="item-image" />
      </div>
      <div className="item-info">
        <h3>{title}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default CollectionItem;

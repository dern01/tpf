import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CollectionItem.css';

const CollectionItem = ({ id, title, price, image }) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="collection-item" onClick={handleItemClick}>
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

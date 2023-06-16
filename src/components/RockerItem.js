import React from 'react';
import './RockerItem.css';

const RockerItem = ({ rocker }) => {
  const { id, name, fame, imageUrl } = rocker;

  return (
    <div className="rocker-item">
      <img src={imageUrl} alt={name} className="rocker-image" />
      <h2 className="rocker-name">{id}. {name}</h2>
      <p className="rocker-fame">{fame}</p>
    </div>
  );
};

export default RockerItem;

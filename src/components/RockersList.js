import React from 'react';
import RockerItem from './RockerItem';
import rockersData from '../data/rockersData';

const RockersList = () => {
  return (
    <div className="rockers-list">
      {rockersData.map((rocker) => (
        <RockerItem key={rocker.id} rocker={rocker} />
      ))}
    </div>
  );
};

export default RockersList;

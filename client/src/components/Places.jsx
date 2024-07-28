// Places.js
import React from 'react';
import { placesData } from '../data/data'; // Import data

const Places = () => {
  return (
     <div className="container">
      <h4 className='titles-main' >Our Specialized Services</h4>
    <div className="places-container">
     {placesData.map((item, index) => (
        <div key={index} className="places-item">
          <img src={item.img} alt={item.name} className="places-image" />
          <h3 className="places-name">{item.name}</h3>
        </div>
      ))}
     </div>
    </div>
  );
};

export default Places;

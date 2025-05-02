// components/LocationList.js
import React from 'react';
import './LocationList.scss';

const staticLocations = [
  'Aberdeen',
  'Basingstoke',
  'Berkshire',
  'Birmingham',
  'Bradford',
  'Bristol',
  'Derby',
  'Doncaster',
  'Edinburgh',
  'Essex',
  'Exeter',
  'Glasgow'
];

const LocationList = () => {
  return (
    <div className="location-wrapper">
      
      <ul className="location-grid">
        {staticLocations.map((location) => (
          <li key={location}>{location}</li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;



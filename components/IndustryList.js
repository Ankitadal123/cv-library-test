// components/IndustryList.js
import React from 'react';
import '../styles/IndustryList.scss';

const industries = [
  'Accounting',
  'Administration',
  'Agriculture',
  'Arts',
  'Automotive',
  'Catering',
  'Distribution',
  'Driving',
  'Education',
  'Electronics',
  'Engineering',
  'Financial Services'
];

const IndustryList = () => {
  return (
    <div className="industry-wrapper">
      <ul className="industry-grid">
        {industries.map((industry) => (
          <li key={industry}>{industry}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndustryList;

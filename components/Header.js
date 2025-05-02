import React, { useState } from 'react';
//import React from 'react';
import './Header.scss';
import TabSwitcher from '../components/TabSwitcher';
import LocationList from './LocationList';
import IndustryList from './IndustryList';


export default function Header() {
  const [activeTab, setActiveTab] = useState('Jobs by Location');
  return (
    <section className="search-header">
      <img src="/assets/Logo white.svg" alt="CV Library" className="logo" />

      <form className="search-form">
           <div className="form-group">
           <label htmlFor="keyword">Keywords / Job Title / Job Ref</label>
           <input
            type="text"
            id="keyword"
            name="keyword"
            placeholder="e.g. Sales Executive"
            className="input keyword"
            />
            </div>


  {/* Location and Distance */}
  <div className="location-distance">
    <div className="form-group">
      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        name="location"
        placeholder="e.g. town or postcode"
        className="input location"
      />
    </div>
    <div className="form-group">
      <label htmlFor="distance">Distance</label>
      <select id="distance" name="distance" className="input distance">
        <option>15 miles</option>
        <option>25 miles</option>
        <option>50 miles</option>
      </select>
    </div>
  </div>


        <button className="search-button">
              Find jobs now
                <img src="/assets/search.svg" alt="search" className="search-icon" />
        </button>
    </form>
    <TabSwitcher onTabChange={setActiveTab} />

    <div className="tab-content">
        {activeTab === 'Jobs by Location' && <LocationList />}
        {activeTab === 'Jobs by Industry' && <IndustryList />}
    </div>

  </section>
  );
}

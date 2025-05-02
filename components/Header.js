import React, { useState } from 'react';
//import React from 'react';
import './Header.scss';
import TabSwitcher from '../components/TabSwitcher';
import LocationList from './LocationList';
import IndustryList from './IndustryList';
import LocationAutocomplete from './LocationAutocomplete';
import { useTranslation } from 'next-i18next';


export default function Header() {
  const { t } = useTranslation('common');
  const [activeTab, setActiveTab] = useState('Jobs by Location');
  const [selectedLocation, setSelectedLocation] = useState('');
  return (
    <section className="search-header">
      <img src="/assets/Logo white.svg" alt="CV Library" className="logo" />

      <form className="search-form">
           <div className="form-group">
           <label htmlFor="keyword">{t('keywordLabel')}</label>
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
      <label htmlFor="location">{t('locationLabel')}</label>
      <LocationAutocomplete onSelect={(val) => setSelectedLocation(val)} />
    </div>
    <div className="form-group">
      <label htmlFor="distance">{t('distanceLabel')}</label>
      <select id="distance" name="distance" className="input distance">
        <option>15 miles</option>
        <option>25 miles</option>
        <option>50 miles</option>
      </select>
    </div>
  </div>


        <button className="search-button">
        {t('searchJobs')}
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

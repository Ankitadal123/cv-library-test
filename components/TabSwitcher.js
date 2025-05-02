import React, { useState } from 'react';
import './TabSwitcher.scss';

const TabSwitcher = ({ tabs = ['Jobs by Location', 'Jobs by Industry'], onTabChange }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (onTabChange) onTabChange(tab);
  };

  return (
    <div className="tab-switcher">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={tab === activeTab ? 'active' : ''}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabSwitcher;

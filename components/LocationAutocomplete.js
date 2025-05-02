// components/LocationAutocomplete.js
import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import './LocationAutocomplete.scss';

const LocationAutocomplete = ({ onSelect }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (searchTerm) => {
    if (searchTerm.length < 2) {
      setSuggestions([]);
      return;
    }
    try {
      const response = await fetch(`https://api.cv-library.co.uk/v1/locations?q=${searchTerm}`);
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error('Error fetching location suggestions:', error);
    }
  };

  const debouncedFetch = debounce(fetchSuggestions, 300);

  useEffect(() => {
    debouncedFetch(query);
    return () => debouncedFetch.cancel();
  }, [query]);

  const handleSelect = (location) => {
    const label = location.displayLocation || location.label || '';
    onSelect(label);
    setQuery(label);
    setSuggestions([]);
  };

  return (
    <div className="location-autocomplete">
      <input
        type="text"
        className="location-input"
        placeholder="e.g. town or postcode"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((location, index) => (
            <li key={index} onClick={() => handleSelect(location)}>
              {location.displayLocation || location.label || location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationAutocomplete;

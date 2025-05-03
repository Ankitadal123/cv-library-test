// components/LocationAutocomplete.js
import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import '../styles/LocationAutocomplete.scss';
//import { handleApiError } from '../utils/errorHandler'; if need to test the error handling

const LocationAutocomplete = ({ onSelect }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [justSelected, setJustSelected] = useState(false);

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
  const handleSelect = (location) => {
    const label = location.displayLocation || location.label || '';
    setJustSelected(true); 
    onSelect(label);
    setQuery(label);
    setSuggestions([]);
  };

  useEffect(() => {
    if (justSelected) {
      setJustSelected(false);
      return;
    }
    debouncedFetch(query);
    return () => debouncedFetch.cancel();
  }, [query]);

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

// components/LocationAutocomplete.js
import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

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

  return (
    <div className="location-autocomplete">
      <input
        type="text"
        placeholder="e.g. town or postcode"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((location) => (
            <li key={location} onClick={() => {
              onSelect(location);
              setQuery(location);
              setSuggestions([]);
            }}>
              {location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationAutocomplete;

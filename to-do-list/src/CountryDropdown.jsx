// CountryDropdown.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CountryDropdown({ onSelectCountry, selectedCountry }) {
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    // Fetch countries data when the component mounts
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        // Extract the names of all countries from the API response
        const countryNames = response.data.map((country) => country.name.common);

        // Sort the country names in ascending order
        const sortedCountries = countryNames.sort((a, b) => a.localeCompare(b));
        setCountriesList(sortedCountries);
      })
      .catch((error) => {
        console.log('Error fetching countries data:', error);
      });
  }, []);

  return (
    <select
      onChange={(e) => onSelectCountry(e.target.value)}
      className='w-64 py-1 px-3 ring-1 ring-slate-400 rounded-md'
      value={selectedCountry} // Set the default selected value
    >
      <option value="" disabled>Select a country</option>
      {countriesList.map((countryName, index) => (
        <option key={index} value={countryName}>{countryName}</option>
      ))}
    </select>
  );
}

export default CountryDropdown;

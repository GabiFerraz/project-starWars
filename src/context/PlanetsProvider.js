import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/FetchPlanets';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [] });

  async function returnPlanets() {
    const planets = await fetchPlanets();
    setData(planets);
  }

  useEffect(() => {
    returnPlanets();
  }, []);

  function targetValueName({ target }) {
    setFilters((prevFilters) => (
      { ...prevFilters, filterByName: { name: target.value } }));
  }

  return (
    <PlanetsContext.Provider value={ { data, targetValueName, filters, setFilters } }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}.isRequired;

export default PlanetsProvider;

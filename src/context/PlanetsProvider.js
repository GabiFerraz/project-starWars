import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/FetchPlanets';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setPlanetName] = useState({ filterByName: { name: '' } });

  async function returnPlanets() {
    const planets = await fetchPlanets();
    setData(planets);
  }

  useEffect(() => {
    returnPlanets();
  }, []);

  function targetValueName({ target }) {
    setPlanetName({ filterByName: { name: target.value } });
  }

  return (
    <PlanetsContext.Provider value={ { data, targetValueName, filters } }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}.isRequired;

export default PlanetsProvider;

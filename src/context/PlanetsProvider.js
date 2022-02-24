import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/FetchPlanets';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);

  async function returnPlanets() {
    const planets = await fetchPlanets();
    setData(planets);
  }

  useEffect(() => {
    returnPlanets();
  }, []);

  return (
    <PlanetsContext.Provider value={ { data } }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}.isRequired;

export default PlanetsProvider;

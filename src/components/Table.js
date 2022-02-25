import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, filters } = useContext(PlanetsContext);
  const [filterPlanetsNames, setFilterPlanetsNames] = useState([]);

  const isFiltersNumeric = (planet, filterByNumValue) => {
    const { column, comparison, value } = filterByNumValue;
    if (comparison === 'maior que') {
      return Number(planet[column]) > Number(value);
    }
    if (comparison === 'menor que') {
      return Number(planet[column]) < Number(value);
    }
    if (comparison === 'igual a') {
      return Number(planet[column]) === Number(value);
    }
  };

  useEffect(() => {
    const filterNames = data.filter((planet) => (
      planet.name.includes(filters.filterByName.name)
      && filters.filterByNumericValues
        .every((eachFilter) => isFiltersNumeric(planet, eachFilter))));
    setFilterPlanetsNames(filterNames);
  }, [data, filters]);

  // estudar useCallback: avançado do hooks
  // como não sei esse useCallback tive que comentar a função e passar o que tava dentro dessa função no useEffect pq ele pedia uma dependência
  // function returnNamesPlanets() {
  //   const filterNames = data.filter((planet) => (
  //     planet.name.includes(filters.filterByName.name)));
  //   setFilterPlanetsNames(filterNames);
  // }

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>climate</th>
          <th>created</th>
          <th>diameter</th>
          <th>edited</th>
          <th>filmes</th>
          <th>gravity</th>
          <th>orbital_period</th>
          <th>population</th>
          <th>rotation_period</th>
          <th>surface_water</th>
          <th>terrain</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {/* { data.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.climate}</td>
            <td>{planet.created}</td>
            <td>{planet.diameter}</td>
            <td>{planet.edited}</td>
            <td>{planet.filmes}</td>
            <td>{planet.gravity}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.population}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.terrain}</td>
            <td>{planet.url}</td>
          </tr>
        )) } */}
        { filterPlanetsNames.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.climate}</td>
            <td>{planet.created}</td>
            <td>{planet.diameter}</td>
            <td>{planet.edited}</td>
            <td>{planet.filmes}</td>
            <td>{planet.gravity}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.population}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.terrain}</td>
            <td>{planet.url}</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;

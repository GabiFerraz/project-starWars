import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FiltersContainer() {
  const { filters, setFilters } = useContext(PlanetsContext);

  function removeFilter(column) {
    const deleteFilters = filters.filterByNumericValues
      .filter((eachFilter) => column !== eachFilter.column);
    setFilters((prevFilters) => (
      { ...prevFilters, filterByNumericValues: deleteFilters }));
  }

  function removeAllFilters() {
    setFilters((prevFilters) => (
      { ...prevFilters, filterByNumericValues: [] }));
  }

  return (
    <section className="section-filters">
      { filters.filterByNumericValues.map((eachFilter) => (
        <p key={ eachFilter.column } data-testid="filter">
          { `${eachFilter.column} ${eachFilter.comparison} ${eachFilter.value}` }
          <button
            className="buttonRemove"
            type="button"
            onClick={ () => removeFilter(eachFilter.column) }
          >
            X
          </button>
        </p>
      )) }
      <button
        className="removeAllFilters"
        type="button"
        data-testid="button-remove-filters"
        onClick={ removeAllFilters }
      >
        Remover Filtros
      </button>
    </section>
  );
}

export default FiltersContainer;

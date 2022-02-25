import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Form() {
  const { setFilters, filters } = useContext(PlanetsContext);
  const column = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const comparison = ['maior que', 'menor que', 'igual a'];
  const [inputColumn, setInputColumn] = useState('population');
  const [inputComparison, setInputComparison] = useState('maior que');
  const [inputValue, setValueInput] = useState(0);

  const filterClick = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      filterByNumericValues: [...prevFilters.filterByNumericValues, {
        column: inputColumn,
        comparison: inputComparison,
        value: inputValue }],
    }));
    setValueInput('');
  };

  return (
    <form>
      <label htmlFor="column-select">
        <select
          id="column-select"
          data-testid="column-filter"
          onChange={ ({ target }) => setInputColumn(target.value) }
        >
          { column.filter((eachColumn) => !filters.filterByNumericValues
            .some((eachFilter) => eachColumn === eachFilter.column))
            .map((option) => (
              <option key={ option }>{ option }</option>
            )) }
        </select>
      </label>
      <label htmlFor="comparison-select">
        <select
          id="comparison-select"
          data-testid="comparison-filter"
          onChange={ ({ target }) => setInputComparison(target.value) }
        >
          { comparison.map((option) => (
            <option key={ option }>{ option }</option>
          )) }
        </select>
      </label>
      <label htmlFor="value-input">
        <input
          type="number"
          id="value-input"
          data-testid="value-filter"
          value={ inputValue }
          onChange={ ({ target }) => setValueInput(target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterClick }
      >
        Filtrar
      </button>
    </form>
  );
}

export default Form;

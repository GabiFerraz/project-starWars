import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Input() {
  const { targetValueName } = useContext(PlanetsContext);

  return (
    <section className="header-input">
      <h1 className="header-h1">StarWars Planets</h1>
      <label htmlFor="name-input">
        <input
          type="text"
          id="name-input"
          data-testid="name-filter"
          onChange={ targetValueName }
        />
      </label>
    </section>
  );
}

export default Input;

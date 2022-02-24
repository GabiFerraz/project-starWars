import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Input() {
  const { targetValueName } = useContext(PlanetsContext);

  return (
    <label htmlFor="name-input">
      <input
        type="text"
        id="name-input"
        data-testid="name-filter"
        onChange={ targetValueName }
      />
    </label>
  );
}

export default Input;

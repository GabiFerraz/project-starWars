import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';
import Input from './components/Input';
import Form from './components/Form';
import FiltersContainer from './components/FiltersContainer';

function App() {
  return (
    <PlanetsProvider>
      <Input />
      <Form />
      <FiltersContainer />
      <Table />
    </PlanetsProvider>
  );
}

export default App;

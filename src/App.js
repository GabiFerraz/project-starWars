import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';
import Input from './components/Input';

function App() {
  return (
    <>
      <h1>StarWars Planets</h1>
      <PlanetsProvider>
        <Input />
        <Table />
      </PlanetsProvider>
    </>
  );
}

export default App;

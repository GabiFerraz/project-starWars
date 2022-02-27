import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, filters } = useContext(PlanetsContext);

  const [filterPlanets, setFilterPlanets] = useState([]);

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

  // Fiz a minha função isFiltersNumeric para criar um filtro para os valores numéricos usando os 3 seletores (column, comparison e value).
  // No parâmetro da minha função eu passei o planet e o filterByNumericValue porque eu preciso usar os planetas e os meus 3 seletores para fazer os meus filtros.
  // Aí eu desestruturei os meus seletores dizendo que eles vêm do meu filterByNumValue e comecei as minhas comparações.
  // Se o meu comparison escolhido for igual ao meu maior que, é para retornar true, caso o meu planeta na posição column selecionada seja maior que o meu value. Coloquei em ambos o Number pq eles são números em formato de strings, mas para fazer a comparação eu preciso que eles sejam números de verdade.
  // Se o meu comparison escolhido for igual ao meu menor que, é para retornar true, caso o meu planeta na posição column selecionada seja menor que o meu value.
  // E por último, se o meu comparison escolhido for igual a, é para retornar true, caso o meu planeta na posição column selecionada seja igual ao meu value.
  // Com a minha função pronta, eu usei ela dentro do meu useEffect, modificando a condição dele feita anteriormente.

  useEffect(() => {
    const planetsFilters = data.filter((planet) => (
      planet.name.includes(filters.filterByName.name)
      && filters.filterByNumericValues
        .every((eachFilter) => isFiltersNumeric(planet, eachFilter))));
    setFilterPlanets(planetsFilters);
  }, [data, filters]);

  // Dentro do meu useEffect, eu passei uma arrow function onde eu criei uma variável chamada planetsFilters.
  // Nela, eu fiz um filter no meu data, para através do includes eu verificar se o nome do planeta digitado no input estava no meu filters.filterByName.name para poder filtrar e mostrar na tela só ele (visto que no return lá embaixo eu faço um map usando o estado criado que vai ser atualizado por essa filtragem).
  // Aí eu coloquei o i comercial dentro do meu filtro para que esse filtro continue funcionando junto com outra verificação. E como tem o includes, mesmo que esse filtro não aconteça, não vai quebrar a aplicação pq o includes faz passar.
  // Depois do meu i comercial, eu coloquei um every no meu filters.filterByNumericValues para poder transformar o array de objetos em objetos para poder verificar um por um. Aí eu peguei no parâmetro cada filtro e chamei a minha função isFiltersNumeric que vai fazer as verificações dos filtros passando como parâmetro o planeta e o filtro, que é o que ela recebeu como parâmetro lá em cima.
  // Finalizado a minha constante com os meus filtros, eu atualizei o meu estado de filtros através do meu setFilterPlanets que recebeu essa minha constante.
  // Por último, eu passei dentro do array como segundo parâmtro do meu useEffect o data e o filters, pq ele precisa rodar toda vez que eles forem atualizado.

  // estudar useCallback: avançado do hooks
  // como não sei esse useCallback tive que comentar a função e passar o que tava dentro dessa função no useEffect pq ele pedia uma dependência
  // function returnNamesPlanets() {
  //   const filterNames = data.filter((planet) => (
  //     planet.name.includes(filters.filterByName.name)));
  //   setFilterPlanetsNames(filterNames);
  // }

  return (
    <table className="table">
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
        { filterPlanets.map((planet) => (
          <tr key={ planet.name }>
            <td>{planet.name}</td>
            <td>{planet.climate}</td>
            <td>{planet.created}</td>
            <td>{planet.diameter}</td>
            <td>{planet.edited}</td>
            <td>{planet.films}</td>
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

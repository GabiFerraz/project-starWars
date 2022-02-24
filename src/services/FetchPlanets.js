const fetchPlanets = async () => {
  const requestPlanets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const requestPlanetsJSON = await requestPlanets.json();
  return requestPlanetsJSON.results;
};

export default fetchPlanets;

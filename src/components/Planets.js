import React from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async () => {
  const res = await fetch('https://swapi.dev/api/planets/');
  return res.json();
};

function Planets() {
  const { status, data } = useQuery('planets', fetchPlanets);

  if (status) console.log({ data });

  return (
    <div>
      <h2>Planets </h2>

      {status === 'loading' && (
        <div>
          <p>Loading data</p>
        </div>
      )}

      {status === 'error' && (
        <div>
          <p>Error fetching data</p>
        </div>
      )}

      {status === 'success' && (
        <div>
          {data.results.map((planet) => (
            <Planet planet={planet} key={planet.name} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Planets;

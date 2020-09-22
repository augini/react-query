import React from 'react';
import { useQuery } from 'react-query';
import Person from './Person';

const fetchPeople = async () => {
  const res = await fetch('https://swapi.dev/api/people/');
  return res.json();
};

function People() {
  const { status, data } = useQuery('People', fetchPeople);

  if (status) console.log({ data });

  return (
    <div>
      <h2>People</h2>

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
          {data.results.map((person) => (
            <Person person={person} key={person.name} />
          ))}
        </div>
      )}
    </div>
  );
}

export default People;

import { useState } from 'react';
import { useFetch } from '../Hooks/useFetch.js';

const Jokelist = () => {
  const [url, setUrl] = useState('GET https://icanhazdadjoke.com/');
  const { data: jokes } = useFetch(url);

  return (
    <div className='Joke-list'>
      <h2>Joke List</h2>
      <ul>
        {jokes &&
          jokes.map((joke) => (
            <li key={trip.id}>
              <h3> {trip.joke}</h3>
              <p>{trip.status}</p>
            </li>
          ))}
      </ul>
      <div className='buttons'>
        <button onClick={() => setUrl('GET https://icanhazdadjoke.com/search')}>
          {' '}
          Search Jokes
        </button>
        <button
          onClick={() => setUrl('GET https://icanhazdadjoke.com/j/<joke_id>')}
        >
          {' '}
          Pick A Joke
        </button>
        <button onClick={() => setUrl('GET https://icanhazdadjoke.com/')}>
          {' '}
          Random Jokes
        </button>
      </div>
    </div>
  );
};
export default Jokelist;

import { useState } from 'react';
import { useFetch } from '../Hooks/useFetch.js';

const Jokelist = () => {
  const [url, setUrl] = useState('GET https://icanhazdadjoke.com/');
  const { data: randomJokes } = useFetch(url);

  return (
    <div className='listContainer'>
      <div className='Joke-list'>
        <h2>Joke List</h2>
        <ul>
          {randomJokes &&
            randomJokes.map((randomJoke) => (
              <li key={randomJoke.id}>
                <h3> {randomJoke.joke}</h3>
                <p>{randomJoke.status}</p>
              </li>
            ))}
        </ul>
        <div className='buttons'>
          <button
            onClick={() => setUrl('GET https://icanhazdadjoke.com/search')}
          >
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
    </div>
  );
};
export default Jokelist;

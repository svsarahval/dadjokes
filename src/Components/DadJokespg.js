import { useEffect, useState } from 'react';
import { useFetch } from '../Hooks/useFetch.js';

function DadJokes() {
  const [url, setUrl] = useState('https://icanhazdadjoke.com/');
  const [data, setData] = useState([]);

  async function fetchData() {
    const res = await fetch(url, {
      headers: { Accept: 'application/json' },
    });
    const json = await res.json();
    setData(json.joke);
    console.log(json.joke);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='listContainer'>
      <div className='Joke-list'>
        <h1>Joke #</h1>
        <p>{data}</p>

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
}

export default DadJokes;

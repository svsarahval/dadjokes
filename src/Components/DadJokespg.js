import { useEffect, useState } from 'react';
import { useFetch } from '../Hooks/useFetch.js';

function DadJokespg() {
  const [url, setUrl] = useState('https://icanhazdadjoke.com/');
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  async function fetchData() {
    const res = await fetch(url, {
      headers: { Accept: 'application/json' },
    });
    const json = await res.json();
    setData(json.joke);
    console.log(json.joke);
  }

  async function searchData() {
    const res = await fetch(url, {
      headers: { Accept: 'application/json' },
    });

    const json = await res.json();
    const work = Math.floor(Math.random() * json.results.length);
    setData(json.results[work].joke);
    console.log(json.results[work].joke);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className='listContainer'>
      <div className='Joke-list'>
        <h1>Joke #</h1>
        <p>{data}</p>

        <div className='buttons'>
          <input
            onChange={handleChange}
            type='text'
            value={search}
            placeholder='Search'
          />
          <button
            onClick={() => {
              searchData();
              setUrl(`https://icanhazdadjoke.com/search?=term${search}`);
            }}
          >
            {' '}
            Search Jokes
          </button>
          <button
            onClick={() => {
              fetchData();
              searchData();
              setUrl('https://icanhazdadjoke.com/search?term=baby');
            }}
          >
            {' '}
            Baby Jokes
          </button>
          <button
            onClick={() => {
              fetchData();
              searchData();
            }}
          >
            {' '}
            Random Jokes
          </button>

          <button
            onClick={() => {
              fetchData();
              searchData();
              setUrl('https://icanhazdadjoke.com/search?term=feet');
            }}
          >
            {' '}
            Feet Jokes
          </button>

          <button
            onClick={() => {
              fetchData();
              searchData();
              setUrl('https://icanhazdadjoke.com/search?term=pants');
            }}
          >
            {' '}
            Pant Jokes
          </button>
        </div>
      </div>
    </div>
  );
}

export default DadJokespg;

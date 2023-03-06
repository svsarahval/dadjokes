import React, { useState } from 'react';
import useDadJokes from '../Hooks/useDadJokes';

function DadJokespg() {
  const [searchTerm, setSearchTerm] = useState('');
  const { joke, setUrl, searchJokes } = useDadJokes(searchTerm);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='listContainer'>
      <div className='Joke-list'>
        <h1>Dad Jokes</h1>
        <p>{joke}</p>

        <div className='buttons'>
          <input
            onChange={handleChange}
            type='text'
            value={searchTerm}
            placeholder='Search'
          />
          <button
            onClick={() => {
              searchJokes();
            }}
          >
            {' '}
            Search Jokes
          </button>
          <button
            onClick={() => {
              setUrl('https://icanhazdadjoke.com/search?term=baby');
            }}
          >
            {' '}
            Baby Jokes
          </button>
          <button
            onClick={() => {
              setUrl('https://icanhazdadjoke.com/');
            }}
          >
            {' '}
            Random Jokes
          </button>
          <button
            onClick={() => {
              setUrl('https://icanhazdadjoke.com/search?term=feet');
            }}
          >
            {' '}
            Feet Jokes
          </button>
          <button
            onClick={() => {
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

import React, { useState } from 'react';
import useDadJokes from '../Hooks/useDadJokes';

function DadJokespg() {
  const { data, handleSearch } = useDadJokes();

  const handleChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div className='listContainer'>
      <div className='Joke-list'>
        <h1>Dad Jokes</h1>
        <p>{data}</p>

        <div className='buttons'>
          <input onChange={handleChange} type='text' placeholder='Search' />
          <button onClick={() => handleSearch('')}>Search</button>
          <button onClick={() => handleSearch('baby')}>Baby Jokes</button>
          <button onClick={() => handleSearch('feet')}>Feet Jokes</button>
          <button onClick={() => handleSearch('pants')}>Pant Jokes</button>
          <button onClick={() => handleSearch('')}>Random Jokes</button>
        </div>
      </div>
    </div>
  );
}

export default DadJokespg;

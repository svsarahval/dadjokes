import { useState, useEffect } from 'react';

function useDadJokes(initialUrl = 'https://icanhazdadjoke.com/') {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  async function fetchData() {
    const res = await fetch(url, {
      headers: { Accept: 'application/json' },
    });
    const json = await res.json();
    setData(json.joke);
  }

  async function searchData() {
    const res = await fetch(url, {
      headers: { Accept: 'application/json' },
    });

    const json = await res.json();
    const work = Math.floor(Math.random() * json.results.length);
    setData(json.results[work].joke);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
    setUrl(`https://icanhazdadjoke.com/search?term=${searchTerm}`);
    searchData();
  };

  return { data, handleSearch };
}

export default useDadJokes;

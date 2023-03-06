import { useState, useEffect } from 'react';

export function useDadJokes(searchTerm) {
  const [url, setUrl] = useState('https://icanhazdadjoke.com/');
  const [joke, setJoke] = useState('');

  async function fetchData() {
    const res = await fetch(url, {
      headers: { Accept: 'application/json' },
    });
    const json = await res.json();
    setJoke(json.joke);
  }

  async function searchJokes() {
    setUrl(`https://icanhazdadjoke.com/search?term=${searchTerm}`);
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { joke, setUrl, searchJokes };
}
export default useDadJokes;

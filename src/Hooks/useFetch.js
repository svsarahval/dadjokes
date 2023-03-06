import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' },
      });
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, [url]);

  return { data: data };
};

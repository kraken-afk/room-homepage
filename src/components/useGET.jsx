import { useEffect, useState } from 'react';

export default function useGET(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(res => setData(res))
    .catch(err => setData(err));
  }, [url])

  return data;
}



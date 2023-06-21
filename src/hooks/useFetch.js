import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetch(endpoint) {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(endpoint);
    setData(response.data);
  };
  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return data;
}

import endPoints from '@services/api';
import axios from 'axios';

const addProducts = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.products.postProducts, body, config);
  return response.data;
};

export { addProducts };
